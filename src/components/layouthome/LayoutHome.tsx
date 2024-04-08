import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

const LayoutHome = () => {
    return <div>
        <Header />
        <div className="flex">
            <div className="grow">
                {/* Nội dung chung */}
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
}

export default LayoutHome
