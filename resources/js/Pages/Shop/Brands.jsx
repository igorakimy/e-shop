import { Head, Link } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Brands = ({slug}) => {
  return (
    <>
      <Head title="Бренды" />

      <div className="flex flex-col my-5 p-5 bg-white text-black">
        <h1 className="text-2xl font-semibold">Бренды представленные в интернет-магазине:</h1>

        <div className="flex flex-wrap w-full sticky top-[50px] z-10 font-semibold cursor-pointer mb-5 py-5 bg-white text-lg">
          <Link className="mr-5"></Link>
          <Link className="mr-5">0-9</Link>
          <Link className="mr-5">A</Link>
          <Link className="mr-5">B</Link>
        </div>

        <section className="brands-list flex p-2.5 mb-5">
          <div id="target-0-9" className="flex justify-center items-center max-w-[50px] max-h-[50px] w-full h-[50px] bg-orange rounded-[50%] text-white font-semibold text-lg mr-7 relative">
            <FontAwesomeIcon icon="fa-solid fa-long-arrow-alt-right" className="text-orange absolute left-[97%]" />
          </div>
          <div className="flex flex-wrap justify-start items-center w-full text-base">
            #
          </div>
        </section>
        <section className="brands-list flex p-2.5 mb-5">
          <div id="target-0-9" className="flex justify-center items-center max-w-[50px] max-h-[50px] w-full h-[50px] bg-orange rounded-[50%] text-white font-semibold text-lg mr-7 relative">
            0-9
            <FontAwesomeIcon icon="fa-solid fa-long-arrow-alt-right" className="text-orange absolute left-[97%]" />
          </div>
          <div className="flex flex-wrap justify-start items-center w-full text-base">
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1More</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1STPLAYER</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3Cott</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3M</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">5bytes</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">70Mai</Link>
          </div>
        </section>
        <section className="brands-list flex p-2.5 mb-5">
          <div id="target-0-9" className="flex justify-center items-center max-w-[50px] max-h-[50px] w-full h-[50px] bg-orange rounded-[50%] text-white font-semibold text-lg mr-7 relative">
            A
            <FontAwesomeIcon icon="fa-solid fa-long-arrow-alt-right" className="text-orange absolute left-[97%]" />
          </div>
          <div className="flex flex-wrap justify-start items-center w-full text-base">
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1More</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1STPLAYER</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3Cott</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3M</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">5bytes</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">70Mai</Link>
          </div>
        </section>
        <section className="brands-list flex p-2.5 mb-5">
          <div id="target-0-9" className="flex justify-center items-center max-w-[50px] max-h-[50px] w-full h-[50px] bg-orange rounded-[50%] text-white font-semibold text-lg mr-7 relative">
            B
            <FontAwesomeIcon icon="fa-solid fa-long-arrow-alt-right" className="text-orange absolute left-[97%]" />
          </div>
          <div className="flex flex-wrap justify-start items-center w-full text-base">
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1More</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">1STPLAYER</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3Cott</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">3M</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">5bytes</Link>
            <Link href={route('brand', '1more')} className="mr-5 hover:underline">70Mai</Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Brands
