import Badge from '@/Components/ui/Badge'
import { useModal } from '@/Components/Context/ModalContext'

const Badges = ({product}) => {

  const { openModal } = useModal()

  return (
    <div className="labels h-[20px] flex flex-row">
      {product.expected_at && (<Badge text="Ожидается" className="bg-light-blue"/>)}
      {product.in_stock === 'Уточняйте' && (<Badge text="Наличие уточняйте" className="bg-lime-green"/>)}
      {product.promotion && (<Badge
        text="Акция"
        className="bg-orange cursor-pointer"
        onClick={() => openModal('promotion', `${product.promotion.name} -
        ${(new Date(product.promotion.started_at)).toLocaleDateString()} по
        ${(new Date(product.promotion.ended_at)).toLocaleDateString()}`)}/>
      )}
      {product.is_hit && (<Badge text="Хит продаж" className="bg-light-violet"/>)}
      {product.is_new && (<Badge text="Новинка" className="bg-light-green"/>)}
      {product.is_best_price && (<Badge text="Лучшая цена" className="bg-dark-cyan"/>)}
      {product.is_markdown && (<Badge text="Уценка" className="bg-[#8e8e8e]"/>)}
      {product.discount > 0 && (<Badge text={`Скидка ${product.discount} ₽`} className="bg-bright-red"/>)}
    </div>
  )
}

export default Badges
