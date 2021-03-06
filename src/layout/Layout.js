import React from "react";
import {Route, Routes} from "react-router-dom";
import TopNav from "./TopNav.js";
import NotFound from "./NotFound.js";
import Home from "./Home.js";
import AboutUs from "../pages/AboutUs";
import GetInvolved from "../pages/GetInvolved.js";
import Donate from "../pages/Donate.js";
import Contact from "../pages/Contact.js";
import MobileMenu from "./MobileMenu.js";
import Footer from "../layout/Footer.js";
import "./Layout.css";


export default function Layout() {
    return (
<div className="wholesite">
        <div>
            <TopNav/>
        </div>
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<AboutUs/>} />
                <Route exact path="/getinvolved" element={<GetInvolved/>}/>
                <Route exact path="/donate" element={<Donate/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/mobilemenu" element ={<MobileMenu/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        <div className="footerfix">
        <Footer />
        </div>
        </div>
    )
}