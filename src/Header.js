import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import Language from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// avatar creates a icon for user:
import { Avatar } from "@material-ui/core";
import newlogo from "./Images/newlogo.png";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={newlogo} alt="airbnb logo" />

      <div className="header_center">
        <input type="text" placeholder="Where are you going" />
        <Search />
      </div>

      <div className="header_right">
        <div className="becomeAHost">
          <p>Become a host </p>
        </div>
        <Language className="becomeAHost" />
        <ExpandMoreIcon style={{ fill: "white" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
