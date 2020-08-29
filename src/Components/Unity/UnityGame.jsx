import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Unity, { UnityContent } from "react-unity-webgl";

const UnityGame = (props) => {
  var unityContent = new UnityContent(
    "./Build/Unity.json",
    "./Build/UnityLoader.js"
  );

  //var token = localStorage.getItem("Settings");
  var token = localStorage.getItem("Settings");

  const handleUnity = () => {
    var message = unityContent.send("ReplText", "ReplaceText", token);
  };

  unityContent.on("GetTokenE", () => {
    {
      return localStorage.getItem("Settings");
      //alert("Unity delivered this message to me" + score);
      //console.log("Unity delivered this message to me");
    }
  });

  return (
    <div className="UnityWindow">
      <Unity unityContent={unityContent} />
      <button id="submit" onClick={handleUnity}>
        <span id="button-text">Pay</span>
      </button>
    </div>
  );
};

export default withRouter(UnityGame);
