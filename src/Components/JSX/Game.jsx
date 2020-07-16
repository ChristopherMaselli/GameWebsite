import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  /*
  const [playerList, setPlayerList] = useState({
    players: props.playerList,
  });

  const handlePlayerList = async () => {
    setPlayerList({ players: props.playerList });
    console.log("playerList");
    console.log(props.playerList);
  };

  useEffect(() => {
    handlePlayerList();
  }, []);
  */

  return (
    <div>
      <div>{props.title}</div>
      <img src={props.ImagePath} width="100" height="100"></img>
      <div>
        Game Owner: {props.owner}
        When Created: {props.DateCreated}
        LastPlayed: {props.LastPlayed}
        Next Game Date: {props.NextGameDateTime}
      </div>
      <span style={{ display: "flex", justifyContent: "center" }}>
        {props.playerList.map((player, index) => (
          <div key={index}>
            <Link to="/User">
              <img src={player.ImagePath} width="50" height="50"></img>
            </Link>
          </div>
        ))}
      </span>
    </div>
  );
};

export default withRouter(Game);
//Title //OwnerId //Image //WhenCreated //LastPlayed //NextGameDate
