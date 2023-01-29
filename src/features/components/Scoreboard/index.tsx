import React, { useState } from "react";
import * as Styles from "./styles";

interface ScoreboardProps {
  namePOne: string
  namePTwo: string
  scorePOne: number
  scorePTwo: number
}

export const Scoreboard: React.FC<ScoreboardProps> = ({
  namePOne,
  namePTwo,
  scorePOne,
  scorePTwo
}) => {
  const [scoPlayerOne, setScoPlayerOne] = useState(scorePOne);
  const [scoPlayerTwo, setScoPlayerTwo] = useState(scorePTwo);

  return (
    <Styles.Container>
      <Styles.ButtonPOne>
        <button onClick={() => { setScoPlayerOne(scoPlayerOne - 1) }}>
          -
        </button>
        <button onClick={() => { setScoPlayerOne(scoPlayerOne + 1) }}>
          +
        </button>
      </Styles.ButtonPOne>
      <Styles.TeamOne>
        <label>
          {namePOne.toUpperCase()}
        </label>
        <Styles.Scores>
          <label>
            {scoPlayerOne}
          </label>
        </Styles.Scores>
      </Styles.TeamOne>

      <Styles.TeamTwo>
        <Styles.Scores>
          <label>
            {scoPlayerTwo}
          </label>
        </Styles.Scores>
        <label>
          {namePTwo.toUpperCase()}
        </label>
      </Styles.TeamTwo>
      <Styles.ButtonPTwo>
        <button onClick={() => { setScoPlayerTwo(scoPlayerTwo + 1) }}>
          +
        </button>
        <button onClick={() => { setScoPlayerTwo(scoPlayerTwo - 1) }}>
          -
        </button>
      </Styles.ButtonPTwo>
    </Styles.Container>
  );
}