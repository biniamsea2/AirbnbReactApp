import React from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function Search() {
  return (
    <div className="search">
      <div className="search_info">
        <p>62 stays - 26 august to 30 august- 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/988e9740-496a-44c5-b5ba-94bcad3d6126.jpg?im_w=1200"
        title="Neabry DT Seattle"
        description="1 bedroom 1 bathroom 1 kitchen"
        star="4.93"
        price="143"
        total="175.00"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/988e9740-496a-44c5-b5ba-94bcad3d6126.jpg?im_w=1200"
        title="Two-Story, Family-Friendly Home near Downtown Seattle w/Free WiFi & Washer/Dryer"
        description="4 guests · 2 bedrooms · 3 beds · 1 bath"
        star="4.93"
        price="50"
        total="175.00"
      />
    </div>
  );
}

export default Search;
