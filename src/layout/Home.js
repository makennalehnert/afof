import React from "react";
import "./Home.css";
import Afof2 from "../images/afof2.jpeg";
import Afof3 from "../images/afof3.jpeg";
import Afof4 from "../images/afof4.jpeg";

export default function Home() {
    return (
        <div className="home">
            <h1>Angels for Orphans Foundation</h1>
            <div className="images">
                <img src={Afof2} alt="afof2" width= "350px" height="260px" id="left"/>
                <img src={Afof3} alt="afof3" width= "500px" height="370px"/>
                <img src={Afof4} alt="afof4" width= "350px" height="260px" id="right"/>
            </div>
        </div>
    )
}