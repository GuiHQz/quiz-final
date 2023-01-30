import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { Scoreboard } from "../../components/Scoreboard";
import { ToggleQuestions } from "../../components/ToggleQuestions";
 
export type AllTypeQuestions = "Q1" | "Q2" | "Q3" | "Q4" | "Q5";

const Quiz = () => {
  const [ currentQuestion, setCurrentQuestion ] = useState<AllTypeQuestions>();
  const [ opacity, setOpacity ] = useState(1);

  const onChangeQuestion = (type: AllTypeQuestions) => {
    if (currentQuestion !== type){
      setOpacity(0);
      setTimeout(() => {
        setCurrentQuestion(type);
        setOpacity(1);
      }, 300)
    }
  };

  return (
    <Styles.Container>
      <Styles.Scoreboard>
        <Scoreboard
          namePOne="Player One"
          namePTwo="Player Two"
          scorePOne={0}
          scorePTwo={0}
        />
      </Styles.Scoreboard>
      <Styles.Toggle>
        <Styles.ToggleWrapper>
          <button onClick={() => onChangeQuestion("Q1")}>Q1</button>
          <button onClick={() => onChangeQuestion("Q2")}>Q2</button>
          <button onClick={() => onChangeQuestion("Q3")}>Q3</button>
          <button onClick={() => onChangeQuestion("Q4")}>Q4</button>
          <button onClick={() => onChangeQuestion("Q5")}>Q5</button>
        </Styles.ToggleWrapper>
      </Styles.Toggle>
      <Styles.Content>
        <Styles.ContentWrapper opacity={opacity}>
          <ToggleQuestions currentPageQuestion={currentQuestion!} />
        </Styles.ContentWrapper>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Quiz;