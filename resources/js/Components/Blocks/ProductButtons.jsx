import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import IconCompare from '@/Components/Icons/IconCompare'

const ProductButtons = ({className, product, textClass = 'text-[22px]'}) => {

  return (
    <div className={`product-buttons relative flex justify-between items-center mt-2.5 ` + className || ''}>
      <button
        className="buy-btn add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 min-h-[50px] bg-[#f4f4f4] hover:bg-orange">
        <div className="price-info text-left mr-2">
          {product.discount > 0 && (
            <div className="price-old text-[#868686] text-xs line-through">
              {product.price.toLocaleString()}
              <span> ₽</span>
            </div>
          )}

          <div className={`price ${!product.discount ? textClass : 'text-lg'} font-semibold`}>
            {(product.price - product.discount).toLocaleString()}
            <span> ₽</span>
          </div>
        </div>
        <IconCart fill="#868686" className="min-w-[30px]"/>
      </button>

      <button className="favorite-btn">
        <IconFavorite stroke="#868686" fill="transparent" style={{maxWidth: "32px"}}/>
      </button>

      <button className="compare-btn">
        <IconCompare color="transparent" className="w-[32px]" stroke="#868686"/>
      </button>

    </div>
  )
}

export default ProductButtons
