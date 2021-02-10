import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks/useFlip"
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
