import ContentBox from '@/Components/ui/ContentBox'
import { Head } from '@inertiajs/react'
import DefaultButton from '@/Components/ui/DefaultButton'
import {
  YMaps,
  Map,
  FullscreenControl,
  GeolocationControl,
  RulerControl,
  SearchControl,
  TrafficControl, TypeSelector, ObjectManager, useYMaps, ZoomControl
} from '@pbe/react-yandex-maps'
import { useState } from 'react'

const Shops = ({shops}) => {

  const mapBox = document.querySelector('.map');

  const defaultMapState = {
    center: [47.972842, 37.790249],
    zoom: 10
  }

  const [mapState, setMapState] = useState(defaultMapState)
  const [mapBoxOpen, setMapBoxOpen] = useState(false)
  const [activeShopItem, setActiveShopItem] = useState(0)

  const handleGoToCoordinate = (lat, long) => {
    setMapState({
      center: [lat, long],
      zoom: 18
    })
    mapBox.style.left = '0'
    setMapBoxOpen(true)
  }

  const hideMap = () => {
    mapBox.style.left = '-100%'
    setMapBoxOpen(false)
  }

  return (
    <>
      <Head title="Магазины" />

      <ContentBox className="map-box flex mb-5">
        <div
          className={`mobile-map-close md:hidden ${!mapBoxOpen ? 'hidden' : ''}`}
          onClick={hideMap}
        >
          Закрыть карту
        </div>
        <div className="map w-0 md:static md:z-[12] md:w-3/4 h-full">
          <YMaps
          >
            <Map
              defaultState={defaultMapState}
              state={mapState}
              width={'auto'}
              height={'100%'}
            >
              <FullscreenControl />
              <GeolocationControl options={{ float: "left" }} />
              <RulerControl options={{ float: "right" }} />
              <SearchControl options={{ float: "left" }} />
              <TrafficControl options={{ float: "right" }} />
              <TypeSelector options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
              <ObjectManager
                options={{
                  clusterize: true,
                  gridSize: 32,
                }}
                objects={{
                  openBalloonOnClick: true,
                  preset: "islands#blackDotIcon",
                }}
                clusters={{
                  preset: "islands#orangeClusterIcons",
                }}
                defaultFeatures={{
                  type: "FeatureCollection",
                  features: shops.map((shop, index) => {
                    return {
                      id: index,
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [shop.latitude, shop.longitude],
                      },
                      properties: {
                        balloonContent: `<div>${shop.address}</div>`,
                        clusterCaption: `${index}`
                      }
                    }
                  })
                }}
                modules={[
                  "objectManager.addon.objectsBalloon",
                  "objectManager.addon.objectsHint",
                ]}
              />
            </Map>
          </YMaps>
        </div>

        <div className="shop-list w-full md:w-1/4 h-full overflow-y-auto">
          <ul className="flex flex-col md:pl-5">
            <li className="list-header flex flex-col w-full h-auto mb-5 text-xl">
              Магазины Steelsmart
            </li>
            {shops.map((shop, index) => (
              <li
                key={index}
                className={`shop-list-item ${activeShopItem === index && 'active'} flex flex-col w-full h-auto border border-[#ccc] rounded cursor-pointer hover:bg-[#f5f5f5] active:bg-[#f5f5f5] p-2.5 ${index < shops.length-1 ? 'mb-2.5' : ''}`}
                onClick={() => {
                  handleGoToCoordinate(shop.latitude, shop.longitude)
                  setActiveShopItem(index)
                }}
              >
                <span className="text-orange font-semibold mb-2.5 text-lg md:text-base">{shop.address}</span>
                <img className="md:hidden my-2.5" src={shop.map_image} alt=""/>
                <div className="flex flex-col items-start">
                  {shop.phones.split(',').map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="text-black bg-orange rounded py-0.5 px-1 mb-1 md:text-[#303030] md:p-0 md:mb-0 md:rounded-none md:bg-transparent"
                    >{phone}</a>
                  ))}
                </div>
                <span className="mt-2.5 text-sm text-[#909090]">
                  {shop.work_time}
                </span>
                <DefaultButton
                  text="Показать на карте"
                  className="mt-2.5"
                  handleClick={() => handleGoToCoordinate(shop.latitude, shop.longitude)}
                />
              </li>
            ))}
          </ul>
        </div>
      </ContentBox>
    </>
  )
}

export default Shops
