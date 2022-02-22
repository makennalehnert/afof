import React from "react";
import "./MobileMenu.css";

export default function MobileMenu() {
    return (
        <div className="mobilemenu">
            <ul className="mobileroutes">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/getinvolved">Get Involved</a></li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}