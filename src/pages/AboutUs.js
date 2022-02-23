import React from "react";
import "./AboutUs.css";
import Afof8 from "../images/afof8.jpeg"

export default function AboutUs() {
    return (
        <div id="about">
            <div className="lefty">
            <h1>About Us</h1>
            <p>Angels for Orphans Foundation (AOF) was founded in the year 2018 by a group of Christians who had passion in their hearts to improve the lives of those in need. This includes orphans, needy children, needy youths, widows, single mothers and HIV/AIDS victims in Uganda. AOF offers food, affordable education, medical care, shelter, clothing, sports talents promotion, Gospel preaching, financial literacy lessons and more to improve lives. </p>
            <img src={Afof8} alt="afof8"/>
            </div>
            <div className="righty">
            <h2>Vision</h2>
            <p>To restore great hope in the lives of orphans, needy children, needy youths, widows, single mothers, widows and people living with HIV/AIDS in Uganda.</p>
            <h2>Objectives</h2>
            <ul>
                <li>To promote God’s love and good care to orphans, needy children, needy youths, widows, single mothers, HIV/AIDS victims to live an improved life.</li>
                <li>To guide and empower widows, single mothers and needy youths to start small and big scale income generating activities to get food and income to self-sustain family needs.</li>
                <li>Building social service centers for easy provision of quality and affordable services near the needy people like schools, health centers and vocational training centers.</li>
                <li>To find children sponsors, international volunteers, funding bodies and donors to support the needy ones.</li>
                <li>Start income generating activities to self-sustain the ongoing programs of AOF mainly in agriculture (crop growing, poultry keeping, animal rearing, fish rearing, etc).</li>
                <li>Conduct community outreach programs to create awareness on HIV/AIDS, financial literacy, poverty, etc.</li>
            </ul>
            </div>
        </div>
    )
}