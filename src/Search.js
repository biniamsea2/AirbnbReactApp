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
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48915924/original/89e3c2cc-4f11-4958-bbf1-b40bc86eb1a9.jpeg?im_w=720"
        location="Seattle, Washington, United States"
        title="Rooftop Patio with Waterview, Private Garden & Grill 3BR 3BA"
        description="6 guests · 3 bedrooms · 3 beds · 3 baths"
        star="4.92 (78)"
        price="$310 / night"
        total="$3,200 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/49548781/687328ce_original.jpg?im_w=1200"
        location="Seattle, Washington, United States"
        title="Soundview Home"
        description="5 guests · 3 bedrooms · 0 beds · 2 baths"
        star="4.86 (28)"
        price="$270 / night"
        total="$2,766 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/cde99b14-e1bc-4f4e-9304-d34da6bd470f.jpg?im_w=1200"
        location="Kirkland, Washington, United States"
        title="Modern Living in Kirkland"
        description="6 guests · 2 bedrooms · 2 beds · 2 baths"
        star="4.14 (7)"
        price="$258 / night"
        total="$2,509 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/011768a3-80a5-49f4-b18b-83d9fd7ccce8.jpg?im_w=720"
        location="Renton, Washington, United States"
        title="Cozy House w/ Landscaped yard and a Mountain Peek"
        description="4 guests · 2 bedrooms · 3 beds · 1 bath"
        star="4.96 (23)"
        price="$160 / night"
        total="$1,629 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/a18ec64f-0c13-4893-8ba5-b9bafb71e882.jpg?im_w=1200"
        location="Seattle, Washington, United States"
        title="Spacious Independent 1 BR. Ballard Apartment"
        description="3 guests · 1 bedroom · 2 beds · 1 bath"
        star="4.76 (71)"
        price="$181 / night"
        total="$1,538 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/45bba126-1343-4ae0-a6f4-41502c850085.jpg?im_w=1200"
        location="Seattle, Washington, United States"
        title="Luxury bay view apartment w/ a shared hot tub, community pool and gym!"
        description="4 guests · 1 bedroom · 2 beds · 1 bath"
        star="4.36 (11)"
        price="$129 / night"
        total="$1,321 total"
      />
      <SearchResult
        //   images from airbnb seattle
        img="https://a0.muscache.com/im/pictures/5fd846b4-365b-431b-b43b-aed219f36c07.jpg?im_w=1200"
        location="Shoreline, Washington, United States"
        title="Comfy Shoreline Suite 15 min from Downtown Seattle"
        description="6 guests · 1 bedroom · 3 beds · 1 bath"
        star="4.93 (29)"
        price="$85 / night"
        total="$844 total"
      />
    </div>
  );
}

export default Search;
