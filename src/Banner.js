import React from 'react';
import "./Banner.css";
import "./Button.css";
import {Button} from "@material-ui/core";


function Banner() {
    return (
        <div className="banner">
            <img src ="http://localhost:3000/static/media/banner.d314b5a0.jpg" alt="banner img"/>
            <h1>Made possible by Hosts </h1>
            <div className="banner_info">
                <h2>Get out and stretch your imagination </h2>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner

