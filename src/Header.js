import React, { Component } from "react";
import './header.css'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export class Header extends Component {
  render() {
    return (
      <div className="header">
          
        <div className="header__left">
          <Avatar className="header__avatar" />
          <AccessTimeIcon />
        </div>
        <div className="header__search">
            <input type='search' placeholder='search kraig slack'/>
            <SearchIcon/>
        </div>
        <div className="header__right">
            <HelpOutlineIcon/>
        </div>
      </div>
    );
  }
}

export default Header;
