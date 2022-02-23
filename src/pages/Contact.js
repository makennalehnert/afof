import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div id="contact">
            <h1>Get in Touch</h1>
            <div id="contactdiv">
                <div className="each">
                <h3>Phone</h3>
                <h6>+256 759 810095</h6>
                <h6>+256 752 689820</h6>
                </div>
                <div className="each">
                <h3>Email</h3>
                <h6>angelsfororphansfoundation@gmail.com</h6>
                <h6>alonemukaya@gmail.com</h6>
                </div>
                <div className="each">
                <h3>Address</h3>
                <h6>Mubango Village, Ssentema  Parish, </h6>
                <h6>Kakiri Subcounty, Busiro County, Wakiso District,</h6>
                <h6>Central Region of Uganda, East Africa</h6>
                </div>
            </div>
        </div>
    )
}