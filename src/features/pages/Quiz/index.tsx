import React from "react";
import * as Styles from "./styles";
import { Scoreboard } from "../../components/Scoreboard";

const Quiz = () => {
  return (
    <Styles.Container>
      <Scoreboard
        namePOne="Player One"
        namePTwo="Player Two"
        scorePOne={0}
        scorePTwo={0}
      />
    </Styles.Container>
  )
}

export default Quiz;