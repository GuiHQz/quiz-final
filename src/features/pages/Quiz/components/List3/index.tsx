import { useState } from "react";
import { ObjectiveQuestionsModal } from "../../../../components/ObjectiveQuestionsModal";
import * as Styles from "./styles";

export const List3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState<number>();

  const eleventhQuestion = () => {
    setNumberQuestion(20)
    setIsOpen(true)
  }
  
  const twelfthQuestion = () => {
    setNumberQuestion(21)
    setIsOpen(true)
  }

  const thirteenthQuestion = () => {
    setNumberQuestion(22)
    setIsOpen(true)
  }

  const fourteenthQuestion = () => {
    setNumberQuestion(23)
    setIsOpen(true)
  }

  const fifteenthQuestion = () => {
    setNumberQuestion(24)
    setIsOpen(true)
  }

  const sixteenthQuestion = () => {
    setNumberQuestion(25)
    setIsOpen(true)
  }

  const seventeenthQuestion = () => {
    setNumberQuestion(26)
    setIsOpen(true)
  }

  const eighteenthQuestion = () => {
    setNumberQuestion(27)
    setIsOpen(true)
  }

  const nineteenthQuestion = () => {
    setNumberQuestion(28)
    setIsOpen(true)
  }

  const twentiethQuestion = () => {
    setNumberQuestion(29)
    setIsOpen(true)
  }

  return (
    <Styles.Container>
      {isOpen ? <ObjectiveQuestionsModal type="image" questionNumber={numberQuestion!} onClose={() => setIsOpen(false)}/> : null}
      <Styles.Row>
        <Styles.Box onClick={eleventhQuestion}>21</Styles.Box>
        <Styles.Box onClick={twelfthQuestion}>22</Styles.Box>
        <Styles.Box onClick={thirteenthQuestion}>23</Styles.Box>
        <Styles.Box onClick={fourteenthQuestion}>24</Styles.Box>
        <Styles.Box onClick={fifteenthQuestion}>25</Styles.Box>
      </Styles.Row>
      <Styles.Row>
        <Styles.Box onClick={sixteenthQuestion}>26</Styles.Box>
        <Styles.Box onClick={seventeenthQuestion}>27</Styles.Box>
        <Styles.Box onClick={eighteenthQuestion}>28</Styles.Box>
        <Styles.Box onClick={nineteenthQuestion}>29</Styles.Box>
        <Styles.Box onClick={twentiethQuestion}>30</Styles.Box>
      </Styles.Row>
    </Styles.Container>
  )
}