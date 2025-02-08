import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"

const Layout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout