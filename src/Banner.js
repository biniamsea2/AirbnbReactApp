import React from 'react';
import "./Banner.css";
import "./Button.css";
import {Button} from "@material-ui/core";
import image1 from "./Images/1.jpg";


function Banner() {
    return (
        <div className="banner">
            <div className="banner_info">
                <img id="test" src={image1} alt=""></img>
                <h2>Get out and stretch your 
                    imagination </h2>
                <h5>Plan a different kind of getaway to
                    uncover the hidden gems near you. </h5>
                <Button>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
