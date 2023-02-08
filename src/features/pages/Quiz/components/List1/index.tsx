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

  return (
    <Styles.Container>
      {isOpen ? <QuestionModal questionNumber={numberQuestion!} onClose={() => setIsOpen(false)}/> : null}
      <Styles.Row>
        <Styles.Box onClick={firstQuestion}>1</Styles.Box>
        <Styles.Box>2</Styles.Box>
        <Styles.Box>3</Styles.Box>
        <Styles.Box>4</Styles.Box>
        <Styles.Box>5</Styles.Box>
      </Styles.Row>
      <Styles.Row>
        <Styles.Box>6</Styles.Box>
        <Styles.Box>7</Styles.Box>
        <Styles.Box>8</Styles.Box>
        <Styles.Box>9</Styles.Box>
        <Styles.Box>10</Styles.Box>
      </Styles.Row>
    </Styles.Container>
  )
}