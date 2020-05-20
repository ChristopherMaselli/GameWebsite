import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import banner from "./../../static/banner.jpg";
import ad from "./../../static/ad.jpg";
import "./../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="headerWrapper">
      <div collapseOnSelect bg="alpha" variant="dark" className="Header">
        <Link to="#home">
          <img src={banner} className="banner" alt="Banner image" />
        </Link>
        <Link to="#home">
          <img src={ad} className="ad" alt="Ads go here" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
