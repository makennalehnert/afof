import React from "react";
import "./TopNav.css";
import logo from "../images/afof-logo.jpeg";


export default function TopNav() {
    return (
        <div className="nav">
            <img id="logo" src={logo} alt="Logo" />
            <ul className="routes">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/getinvolved">Get Involved</a></li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}