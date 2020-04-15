import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import "../CSS/Home.css";

const Home = (props) => {
  return (
    <div>
      <div>
        <div class="row">
          <div class="col-md-4">
            <h2>Welcome to my lair, now leave</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4" />
          <div class="col-md-4">
            <h2>...Unless you're one of us</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
