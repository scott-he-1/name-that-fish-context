/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [inputGuess, setInputGuess] = useState("");
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount] = useState(initialFishes.length);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish)
  );
  const nextFishToName = answersLeft.length ? answersLeft[0] : null;

  const handleFishGuess = (e) => {
    e.preventDefault();
    if (inputGuess.toLowerCase() === nextFishToName.name) {
      setCorrectCount((count) => count + 1);
    } else {
      setIncorrectCount((count) => count + 1);
    }
    setInputGuess("");
    setAnswersLeft((prevState) =>
      prevState.filter((fish, index) => index !== 0)
    );
  };

  return (
    <AppContext.Provider
      value={{
        inputGuess,
        setInputGuess,
        incorrectCount,
        setIncorrectCount,
        correctCount,
        setCorrectCount,
        totalCount,
        answersLeft,
        setAnswersLeft,
        nextFishToName,
        handleFishGuess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    inputGuess: context.inputGuess,
    setInputGuess: context.setInputGuess,
    incorrectCount: context.incorrectCount,
    setIncorrectCount: context.setIncorrectCount,
    correctCount: context.correctCount,
    setCorrectCount: context.setCorrectCount,
    totalCount: context.totalCount,
    answersLeft: context.answersLeft,
    setAnswersLeft: context.setAnswersLeft,
    nextFishToName: context.nextFishToName,
    handleFishGuess: context.handleFishGuess,
  };
};
