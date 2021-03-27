import React from 'react';
import bannerImage from "./Images/banner.jpg";
import "./Banner.css";


function Banner() {
    return (
        <div>
            <img src ={bannerImage} alt="banner img"/>
            <h1>Made possible by Hosts (needs to be white with black background)</h1>
        </div>
    )
}

export default Banner
