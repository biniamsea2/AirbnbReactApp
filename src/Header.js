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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N8ViojAr8z2j20GcXJVYlH7mTM3G0uD91A&usqp=CAU"
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
