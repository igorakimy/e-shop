import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

const MainLayout = ({children}) => {
  return (
    <>
      <Header />

      <main style={{minHeight: "610px"}}>
        <div className="max-width">
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default MainLayout;
