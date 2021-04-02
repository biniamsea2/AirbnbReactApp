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
        <input type="text" placeholder="Start your search" Style="color:red;" />
        <Search />
      </div>

      <div className="header_right">
        <a
          className="becomeAHost"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/host/homes"
        >
          <p>Become a host</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/?locale=en&country_override=US"
        >
          <Language className="becomeAHost" />
        </a>
        <ExpandMoreIcon style={{ fill: "white" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
