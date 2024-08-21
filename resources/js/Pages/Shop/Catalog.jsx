import Breadcrumbs from '@/Components/Breadcrumbs'
import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const Catalog = ({title, subCategories, breadcrumbs}) => {
  return (
    <>
      <Head title={title}/>

      {subCategories && subCategories.length > 0 ? (
        <div className="mt-5">
          <Breadcrumbs items={breadcrumbs}/>

          <div className="title-product mt-5 text-2xl font-semibold text-center">
            <h1>{title}</h1>
          </div>
          <div className="subcategories-container flex flex-wrap mt-5 p-2.5 md:p-0">
            {subCategories && subCategories.map((category) => {
              return (
                <div key={category.id} className="subcategories-item">
                  <Link className="flex" href={category.url_address}>
                    {category.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="filter-box hidden md:flex flex-col min-w-[268px]">
            <form action="" className="filters-form flex flex-col bg-white pt-5 rounded-b-md">
              <section className="flex flex-col">
                <h4 className="text-xs">Цена</h4>
                <div className="price-input">
                </div>
              </section>
              <section className="flex flex-col">
                <h4 className="text-xs">Наличие</h4>
                <div>
                </div>
              </section>
              <section className="flex flex-col">
                <h4 className="text-xs">Бренд</h4>
                <div>
                </div>
              </section>
            </form>
          </div>

          <div className="flex flex-col mx-0 px-2.5 md:px-0 md:ml-5 md:mr-0 mt-5 w-full">
            <Breadcrumbs items={breadcrumbs}/>
            <ContentBox >
              <h1 className="text-2xl font-semibold">{title}</h1>
            </ContentBox>
          </div>
        </div>
      )}

    </>

  )
}

export default Catalog
