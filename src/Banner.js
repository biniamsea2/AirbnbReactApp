import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import image1 from "./Images/1.jpg";
import SearchDate from "./SearchDate";
import { useHistory } from "react-router-dom";


function Banner() {
  const history = useHistory();
  //setting the show dates button to false
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      {/* if showSearch is true then display the SearchDate Component:  */}
      <div className="banner_search">
        {showSearch && <SearchDate />}
        {/* onClick set showSearch to the opposite of what the default is (false)  */}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {/* if showSearch is true show "Hide" otherwise show "Search Dates" */}
          {showSearch ? "Close Calendar" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <img id="backgroundImg" src={image1} alt=""></img>
        <h1 className="imagination">Get out and stretch your imagination </h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick ={() => history.push('/search')}>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
