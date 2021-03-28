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
        src="https://www.pikpng.com/pngl/m/257-2571978_genesys-support-for-airbnb-airbnb-white-logo-transparent.png"
        alt="airbnb logo"
      />

      <div className="header_center">
        <input type="text" />
        <Search />
      </div>

      <div className="header_right">
        <div className="becomeAHost">
          <p>Become a host </p>
        </div>
        <Language className="becomeAHost" />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
