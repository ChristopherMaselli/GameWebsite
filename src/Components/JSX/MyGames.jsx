import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";
import { ListGroup } from "react-bootstrap";
import Game from "./Game";

const MyGames = (props) => {
  const [info, setInfo] = useState({
    items: [
      {
        title: "FirstGame",
        picture: "Whatever",
      },
      {
        title: "FirstGame",
        picture: "Whatever",
      },
      {
        title: "FirstGame",
        picture: "Whatever",
      },
    ],
  });

  const getGamesDetails = async () => {
    var token = localStorage.getItem("Settings");
    const obj = {
      token: token,
    };

    var details = await axios.post(
      "https://localhost:5001/api/Data/UserGames",
      obj
    );

    var gamesArray = JSON.parse(details.data["gameList"]);

    console.log(gamesArray);

    //Get json list of the games
    //Deserialize into key/value pairs of w/e
    //loop through list and create list of game components with info filled in
    //put that list into an array into the state
    //load the list like below
  };

  useEffect(() => {
    getGamesDetails();
  }, []);

  return (
    <div>
      <div>
        {info.items.map((item) => (
          <Game
            key={item}
            title={item.title}
            owner="Chris"
            ImagePath="XYZ"
            WhenCreated="Now"
            LastPlayed="Yesterday"
            NextGameDateTime="Tomorrow"
          ></Game>
        ))}
      </div>
    </div>
  );
};
export default withRouter(MyGames);

/*
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      </ListGroup>
*/

/*
<ListGroup>
        {info.items.map((item) => (
          <Game key={item} title="FirstGame" owner="Chris" ImagePath="XYZ" WhenCreated="Now" LastPlayed="Yesterday" NextGameDateTime="Tomorrow">{item}</Game>
        ))}
      </ListGroup>
*/
