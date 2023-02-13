import { useState } from "react";
import { QuestionModal } from "../../../../components/QuestionModal";
import * as Styles from "./styles";

export const List2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState<number>();

  const eleventhQuestion = () => {
    setNumberQuestion(0)
    setIsOpen(true)
  }
  
  const twelfthQuestion = () => {
    setNumberQuestion(1)
    setIsOpen(true)
  }

  const thirteenthQuestion = () => {
    setNumberQuestion(2)
    setIsOpen(true)
  }

  const fourteenthQuestion = () => {
    setNumberQuestion(3)
    setIsOpen(true)
  }

  const fifteenthQuestion = () => {
    setNumberQuestion(4)
    setIsOpen(true)
  }

  const sixteenthQuestion = () => {
    setNumberQuestion(5)
    setIsOpen(true)
  }

  const seventeenthQuestion = () => {
    setNumberQuestion(6)
    setIsOpen(true)
  }

  const eighteenthQuestion = () => {
    setNumberQuestion(7)
    setIsOpen(true)
  }

  const nineteenthQuestion = () => {
    setNumberQuestion(8)
    setIsOpen(true)
  }

  const twentiethQuestion = () => {
    setNumberQuestion(9)
    setIsOpen(true)
  }

  return (
    <Styles.Container>
      {isOpen ? <QuestionModal type="text" questionNumber={numberQuestion!} onClose={() => setIsOpen(false)}/> : null}
      <Styles.Row>
        <Styles.Box onClick={eleventhQuestion}>11</Styles.Box>
        <Styles.Box onClick={twelfthQuestion}>12</Styles.Box>
        <Styles.Box onClick={thirteenthQuestion}>13</Styles.Box>
        <Styles.Box onClick={fourteenthQuestion}>14</Styles.Box>
        <Styles.Box onClick={fifteenthQuestion}>15</Styles.Box>
      </Styles.Row>
      <Styles.Row>
        <Styles.Box onClick={sixteenthQuestion}>16</Styles.Box>
        <Styles.Box onClick={seventeenthQuestion}>17</Styles.Box>
        <Styles.Box onClick={eighteenthQuestion}>18</Styles.Box>
        <Styles.Box onClick={nineteenthQuestion}>19</Styles.Box>
        <Styles.Box onClick={twentiethQuestion}>20</Styles.Box>
      </Styles.Row>
    </Styles.Container>
  )
}