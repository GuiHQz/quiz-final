import { useState } from "react";
import { QuestionModal } from "../../../../components/QuestionModal";
import * as Styles from "./styles";

export const List1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [numberQuestion, setNumberQuestion] = useState<number>()

  const firstQuestion = () => {
    setNumberQuestion(0)
    setIsOpen(true)
  }
  
  const secondQuestion = () => {
    setNumberQuestion(1)
    setIsOpen(true)
  }

  const thirdQuestion = () => {
    setNumberQuestion(2)
    setIsOpen(true)
  }

  const fourthQuestion = () => {
    setNumberQuestion(3)
    setIsOpen(true)
  }

  const fifthQuestion = () => {
    setNumberQuestion(4)
    setIsOpen(true)
  }

  const sixthQuestion = () => {
    setNumberQuestion(5)
    setIsOpen(true)
  }

  const seventhQuestion = () => {
    setNumberQuestion(6)
    setIsOpen(true)
  }

  const eighthQuestion = () => {
    setNumberQuestion(7)
    setIsOpen(true)
  }

  const ninethQuestion = () => {
    setNumberQuestion(8)
    setIsOpen(true)
  }

  const tenthQuestion = () => {
    setNumberQuestion(9)
    setIsOpen(true)
  }

  return (
    <Styles.Container>
      {isOpen ? <QuestionModal type="text" questionNumber={numberQuestion!} onClose={() => setIsOpen(false)}/> : null}
      <Styles.Row>
        <Styles.Box onClick={firstQuestion}>1</Styles.Box>
        <Styles.Box onClick={secondQuestion}>2</Styles.Box>
        <Styles.Box onClick={thirdQuestion}>3</Styles.Box>
        <Styles.Box onClick={fourthQuestion}>4</Styles.Box>
        <Styles.Box onClick={fifthQuestion}>5</Styles.Box>
      </Styles.Row>
      <Styles.Row>
        <Styles.Box onClick={sixthQuestion}>6</Styles.Box>
        <Styles.Box onClick={seventhQuestion}>7</Styles.Box>
        <Styles.Box onClick={eighthQuestion}>8</Styles.Box>
        <Styles.Box onClick={ninethQuestion}>9</Styles.Box>
        <Styles.Box onClick={tenthQuestion}>10</Styles.Box>
      </Styles.Row>
    </Styles.Container>
  )
}