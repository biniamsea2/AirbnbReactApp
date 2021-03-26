import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import Language from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// avatar creates a icon for user:
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.wfla.com/wp-content/uploads/sites/71/2020/03/AIRBNB.jpg"
        alt="airbnb logo"
      />

      <div className="header_center">
        <input type="text" />
        <Search />
      </div>

      <div className="header_right">
        <p>Become a host </p>
        <Language />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
