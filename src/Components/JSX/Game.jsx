import React from "react";
import { withRouter } from "react-router-dom";

const Game = (props) => {
  return <div>{props.title}</div>;
};

export default withRouter(Game);
//Title //OwnerId //Image //WhenCreated //LastPlayed //NextGameDate
