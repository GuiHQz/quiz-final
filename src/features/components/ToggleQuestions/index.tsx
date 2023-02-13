import * as Styles from "./styles";
import { AllTypeQuestions } from "../../pages/Quiz";
import { List1 } from "../../pages/Quiz/components/List1";
import { List2 } from "../../pages/Quiz/components/List2";

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
      {currentPageQuestion == "QP1" && (
        <List1 />
      )}
      {currentPageQuestion == "QP2" && (
        <List2 />
      )}
      {currentPageQuestion == "QP3" && (
        <div>3</div>
      )}
      {currentPageQuestion == "QP4" && (
        <div>4</div>
      )}
      {currentPageQuestion == "QP5" && (
        <div>5</div>
      )}
    </Styles.Container>
  )
}