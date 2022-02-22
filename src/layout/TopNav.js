import React from "react";
import "./TopNav.css";
import logo from "../images/afof-logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function TopNav() {


    let navigate = useNavigate();

    function handleClick() {
        navigate("/mobilemenu");
    }

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
            <button id="hamburger-menu" onClick={handleClick}>
            </button>
        </div>
    )
}