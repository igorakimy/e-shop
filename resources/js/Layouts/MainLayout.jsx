import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'

const MainLayout = ({children}) => {

  const { categories } = usePage().props

  return (
    <>
      <Header categories={categories} />

      <main style={{minHeight: "683px"}}>
        <div className="max-width">
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default MainLayout;
