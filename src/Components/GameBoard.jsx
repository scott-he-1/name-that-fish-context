import React from "react";
import { useAppContext } from "../app.context";
import { FinalScore } from "./FinalScore";
import "./styles/game-board.css";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const {
    nextFishToName,
    handleFishGuess,
    setInputGuess,
    inputGuess,
    answersLeft,
  } = useAppContext();

  const onGuessFish = (e) => {
    e.preventDefault();
    handleFishGuess(e);
  };

  return (
    <>
      {answersLeft.length <= 0 ? (
        <FinalScore />
      ) : (
        <div id="game-board">
          <div id="fish-container">
            <img src={nextFishToName.url} alt={nextFishToName.name} />
          </div>
          <form id="fish-guess-form" onSubmit={onGuessFish}>
            <label htmlFor="fish-guess">What kind of fish is this?</label>
            <input
              type="text"
              name="fish-guess"
              value={inputGuess}
              onChange={(e) => setInputGuess(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};
