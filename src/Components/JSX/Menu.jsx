import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import "./../CSS/Menu.css";

const GamesProfile = (props) => {
  return (
    <Navbar className="Menu" collapseOnSelect expand="lg" bg="black">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="MenuItem" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="MenuItem" href="#features">
            Features
          </Nav.Link>
          <Nav.Link className="MenuItem" href="#pricing">
            Pricing
          </Nav.Link>
          <NavDropdown
            className="MenuItem"
            title="Dropdown"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="MenuItem" href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item className="MenuItem" href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item className="MenuItem" href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="MenuItem" href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link className="MenuItem" href="#deets">
            More deets
          </Nav.Link>
          <Nav className="MenuItem" eventKey={2}>
            {localStorage.getItem("Settings") ? (
              <NavDropdown
                className="MenuItem"
                title="Dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="MenuItem" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="MenuItem" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="MenuItem" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="MenuItem"
                  href="/LoginRegistration"
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button href="/Login">Login</Button>
            )}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GamesProfile;
