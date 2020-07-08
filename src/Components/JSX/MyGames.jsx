import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";
import { ListGroup } from "react-bootstrap";
import Game from "./Game";
import { Next } from "react-bootstrap/PageItem";

const MyGames = (props) => {
  const [gameInfo, setGameInfo] = useState({
    items: [
      {
        game: {
          DateCreated: "2020-07-01T09:20:23.861733",
          GameId: 1,
          ImagePath: "https://cdn.wallpapersafari.com/41/15/xZomb3.jpg",
          NextGameDateTime: "2020-07-01T09:20:23.861733",
          OwnerId: 23,
          Title: "ZoidysGame",
          UserAccount: {
            EmailAddress: "zoidy@gmail.com",
            Id: 23,
            Password: "Something",
            UserName: "zoidy",
          },
        },
        playerList: [],
      },
    ],
  });

  useEffect(() => {
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

      setGameInfo({ items: gamesArray });

      console.log(gameInfo);
      //Get json list of the games
      //Deserialize into key/value pairs of w/e
      //loop through list and create list of game components with info filled in
      //put that list into an array into the state
      //load the list like below
    };

    getGamesDetails();
  }, []);

  return (
    <div>
      <div>
        {gameInfo.items.map((item, index) => (
          <Game
            key={index}
            title={item.game.Title}
            owner={item.game.OwnerId}
            ImagePath={item.game.ImagePath}
            DateCreated={item.game.DateCreated}
            LastPlayed={item.game.LastPlayed}
            NextGameDateTime={item.game.NextGameDateTime}
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
