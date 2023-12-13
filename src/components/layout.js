import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";

const Layout = ({children}) => {

    return (
        <div>
            <Header/>
                {children}
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Layout;