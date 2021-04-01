import React from "react";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Search from "@material-ui/icons/Search";
import Language from "@material-ui/icons/Language";
import "./HeaderSearch.css";

function HeaderSearch() {
  return (
    <div className="header">
      <img className="headerSearchLogo"
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
        alt="logo"
      />

      <div className="header_center">
        <input type="text" placeholder="Where are you going" />
        <Search />
      </div>

      <div className="header_right">
        <div className="becomeAHost">
          <p>Become a host </p>
        </div>
        <Language className="test" />
        <ExpandMoreIcon style={{ fill: "black" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default HeaderSearch;

