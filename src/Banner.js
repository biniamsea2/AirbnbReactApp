import React, {useState} from "react";
import "./Banner.css";
import "./Button.css";
import { Button } from "@material-ui/core";
import image1 from "./Images/1.jpg";
import SearchDate from "./SearchDate";

function Banner() {
  //setting the show dates button to false
  const [showSearch, setShowSearch] = useState(false);


  return (
    <div className="banner">
      {/* if showSearch is true then display the SearchDate Component:  */}
      <div className="banner_search">{showSearch && <SearchDate/> }
      {/* onClick set showSearch to the opposite of what the default is (false)  */}
        <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
          Search Dates
        </Button>
      </div>
      <div className="banner_info">
        <img id="backgroundImg" src={image1} alt=""></img>
        <h1>Get out and stretch your imagination </h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.{" "}
        </h5>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
