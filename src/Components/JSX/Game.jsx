import React from "react";
import { withRouter } from "react-router-dom";

const Game = (props) => {
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
    </div>
  );
};

export default withRouter(Game);
//Title //OwnerId //Image //WhenCreated //LastPlayed //NextGameDate
