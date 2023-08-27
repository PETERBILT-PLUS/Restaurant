import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from './Header';
import Footer from './Footer';


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;