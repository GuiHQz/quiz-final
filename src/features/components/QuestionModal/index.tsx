import { useEffect, useState } from "react"
import * as Styles from "./styles"
import { Questions } from "../../../features/pages/Quiz/components/List1/data/questions"

interface QuestionModalProps {
  onClose: () => void
  questionNumber: number
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  onClose,
  questionNumber
}) => {
  const questions = Questions;
  const [selectedAlternative, setSelectedAlternative] = useState<string>();
  const [correctAlternative, setCorrectAlternative] = useState<string>();

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Close onClick={onClose} />
        {questions[questionNumber].others.map(e =>
          <Styles.Header>
            <h1>{e.title}</h1>
          </Styles.Header>
        )}
        {questions[questionNumber].alternatives.map(e =>
          <Styles.Button
            onClick={() => setSelectedAlternative(e.alternative)}
            style={
              {
                backgroundColor:
                  selectedAlternative === e.alternative ?
                    e.isCorrect
                      ? 'green'
                      : 'red'
                    : ' '
              }
            }
          >
            {e.answer}
          </Styles.Button>
        )}
      </Styles.Content>
    </Styles.Container>
  )
}