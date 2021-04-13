import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';


function Header() {
  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
        className="header_icon"
        alt="header image of homes"
      />
      <div className="header_center">
        <input type="text"></input>
        <SearchIcon />
      </div>
      <div className="header_right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <PersonOutlineSharpIcon />



      </div>
    </div>
  );
}

export default Header;
