import React from "react";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Search from "@material-ui/icons/Search";
import Language from "@material-ui/icons/Language";
import "./HeaderSearch.css";
import {Link} from "react-router-dom";

function HeaderSearch() {
  return (
    <div className="header headerSearch">
      <Link className="logoContainer" to="/">
        <img
          className="headerSearchLogo"
          src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c513.png"
          alt="logo"
        />
      </Link>

      <div className="header_center">
        <input type="text" placeholder="Where are you going" />
        <Search />
      </div>

      <div className="header_right">
        <div className="becomeAHost">
          <p Style="color:black; font-size:14px; font-weight:600;">
            Become a host{" "}
          </p>
        </div>
        <Language className="language" />
        <ExpandMoreIcon style={{ fill: "black" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default HeaderSearch;
