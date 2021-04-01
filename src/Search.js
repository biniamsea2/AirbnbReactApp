import React from 'react'
import "./Search.css";
import { Button } from "@material-ui/core";


function Search() {
    return (
        <div className="search">
            <div className="search_info">
                <p>62 stays - 26 august to 30 august- 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outline" >Cancelation Flexibility</Button>
                <Button variant="outline" >Type of place</Button>
                <Button variant="outline" >Price</Button>
                <Button variant="outline" >Rooms and beds</Button>
                <Button variant="outline" >More Filters</Button>

            </div>
        </div>
    )
}

export default Search
