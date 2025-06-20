import { React, useState } from "react";
//import Input from "./input";
import "/code/projects/Secret_dish/my-app/src/MainMenu.css";
const MainMenu = ({ start, setStart }) => {
  return (
    <div className="main-menu">
      <h1 className="menu-h1">Secret Dish</h1>
      <h2 className="menu-h2">Guess the secret dish</h2>
      <h2 className="menu-h2" style={{ paddingTop: "30px" }}>
        How to Play:
      </h2>
      <ul
        className="menu-p"
        style={{ textAlign: "left", maxWidth: 400, margin: "0 auto" }}
      >
        <li>
          Click <b>Start</b> to begin the game.
        </li>
        <li>Type your guess for the secret dish in the input box.</li>
        <li>Submit your guess to see if it's correct.</li>
        <li>The correct properties will be highlighted in green</li>
        <li>Try to guess the dish in as few attempts as possible!</li>
      </ul>
      <button
        className="menu-button"
        onClick={() => {
          setStart(!start);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default MainMenu;
