import React from "react";
import { AppProvider } from "./app.context";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ScoreBoard />
        <GameBoard />
      </AppProvider>
    </div>
  );
}

export default App;
