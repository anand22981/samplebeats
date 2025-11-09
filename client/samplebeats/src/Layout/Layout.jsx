import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Homepage from "../pages/Homepage";

 export default function Layout(){
    return(
        <Fragment>

            <Navbar />
            <Homepage className="pt-16"/>
            <Footer/>

        </Fragment>
    )
}

