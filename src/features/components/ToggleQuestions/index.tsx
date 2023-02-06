import * as Styles from "./styles";
import { AllTypeQuestions } from "../../pages/Quiz";
import { List1 } from "../../pages/Quiz/components/List1";

interface ToggleQuestionsProps {
  /**
   * Propriedade responsável pela renderização de uma página de questões quando for clicada
   * no botão
   */
  currentPageQuestion: AllTypeQuestions;
}

export const ToggleQuestions: React.FC<ToggleQuestionsProps> = ({
  currentPageQuestion,
}) => {
  return (
    <Styles.Container>
      {currentPageQuestion == "Q1" && (
        <List1 />
      )}
      {currentPageQuestion == "Q2" && (
        <div>2</div>
      )}
      {currentPageQuestion == "Q3" && (
        <div>3</div>
      )}
      {currentPageQuestion == "Q4" && (
        <div>4</div>
      )}
      {currentPageQuestion == "Q5" && (
        <div>5</div>
      )}
    </Styles.Container>
  )
}