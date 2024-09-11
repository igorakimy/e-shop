import { Head, Link } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Brands = ({brandsGroups}) => {

  const goToLetter = (letter) => {
    const el = document.getElementById('target-' + letter)
    const bodyRect = document.body.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    const menu = document.getElementById('letters')
    const allLettersItems = document.querySelectorAll('.brands-list')

    for (let i = 0; i < allLettersItems.length; i++) {
      let letter = allLettersItems[i].querySelector('[id^="target"]')
      letter.classList.remove('!bg-black')
    }

    window.scrollTo({
      top: elRect.top - menu.clientHeight * 2 - bodyRect.top,
      left: 0,
      behavior: 'auto',
    })

    el.classList.add('!bg-black')
  }

  return (
    <>
      <Head title="Бренды" />

      <div className="flex flex-col my-5 p-5 bg-white text-black">
        <h1 className="text-2xl font-semibold">Бренды представленные в интернет-магазине:</h1>

        {brandsGroups.length > 0 ? (
          <>
            <div id="letters" className="flex flex-wrap w-full sticky top-[50px] z-10 font-semibold cursor-pointer mb-5 py-5 bg-white text-lg">
              <Link className="mr-5"></Link>
              {brandsGroups.map((group) => (
                <span
                  key={group.name}
                  className="mr-5 hover:underline select-none"
                  onClick={() => goToLetter(group.name)}
                >
              {group.name}
            </span>
              ))}
            </div>

            {brandsGroups.map((group) => (
              <section key={group.name} className="brands-list flex p-2.5 mb-5">
                <div id={`target-${group.name}`} className={`flex justify-center items-center max-w-[50px] max-h-[50px] w-full h-[50px] bg-orange rounded-[50%] text-white font-semibold text-lg mr-7 relative`}>
                  {group.name}
                  <FontAwesomeIcon icon="fa-solid fa-long-arrow-alt-right" className="text-orange absolute left-full" />
                </div>

                <div className="flex flex-wrap justify-start items-center w-full text-base">
                  {group.brands.map((brand, index) => (
                    <Link key={index} href={route('brand', brand.slug)} className="mr-5 hover:underline">{brand.name}</Link>
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <p className="pt-5">На данный момент нет ни одного бренда</p>
        )}
      </div>
    </>
  )
}

export default Brands
