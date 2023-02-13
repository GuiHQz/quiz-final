import { useEffect, useState } from "react"
import * as Styles from "./styles"
import { Questions } from "../../../features/pages/Quiz/components/List1/data/questions"

interface QuestionModalProps {
    onClose: () => void
    questionNumber: number
    type?: "image" | "text" | "video";
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
    type,
    onClose,
    questionNumber
}) => {
    const textQuestions = Questions;
    const [selectedAlternative, setSelectedAlternative] = useState<string>();

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
                            {textQuestions[questionNumber].others.map(e =>
                                <h1>{e.title}</h1>
                            )}
                        </Styles.Header>

                        {textQuestions[questionNumber].alternatives.map(e =>
                            <Styles.Button
                                onClick={() => setSelectedAlternative(e.alternative)}
                                style={{
                                    backgroundColor:
                                        selectedAlternative === e.alternative ?
                                            e.isCorrect
                                                ? 'green'
                                                : 'red'
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