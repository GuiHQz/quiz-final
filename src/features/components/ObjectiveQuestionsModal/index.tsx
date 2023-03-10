import { useState } from "react"
import * as Styles from "./styles"
import { ObjectiveQuestions } from "../../../features/pages/Quiz/data/objectiveQuestions"

interface ObjectiveQuestionsModalProps {
    onClose: () => void
    questionNumber: number
    type?: "image" | "text" | "video";
}

export const ObjectiveQuestionsModal: React.FC<ObjectiveQuestionsModalProps> = ({
    type,
    onClose,
    questionNumber
}) => {
    const objectiveQuestions = ObjectiveQuestions;
    const [selectedAlternative, setSelectedAlternative] = useState<string | null>(null);

    return (
        <Styles.Container>
            <Styles.Content>
                <Styles.Close onClick={onClose} />
                {type === "image" &&
                    <Styles.Header>
                        Image questions
                    </Styles.Header>}

                {type === "text" &&
                    <div>
                        <Styles.Header>
                            {objectiveQuestions[questionNumber].others.map(e =>
                                <h1>{e.title}</h1>
                            )}
                        </Styles.Header>

                        {objectiveQuestions[questionNumber].alternatives.map(e =>
                            <Styles.Button
                                onClick={() => setSelectedAlternative(e.alternative)}
                                style={{
                                    backgroundColor:
                                        selectedAlternative !== null ?
                                            selectedAlternative === e.alternative && !e.isCorrect ? 'red' :
                                                e.isCorrect
                                                    ? 'green'
                                                    : ''
                                            : ' '
                                }}>
                                {e.answer}
                            </Styles.Button>
                        )}
                    </div>
                }

                {type === "video" &&
                    <Styles.Header>
                        video questions
                    </Styles.Header>
                }

            </Styles.Content>
        </Styles.Container>
    )
}