import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Homepage from "../pages/homepage";
//pages/Homepage.jsx

 export default function Layout(){
    return(
        <Fragment>

            <Navbar />
            <Homepage/>
            <Footer/>

        </Fragment>
    )
}

