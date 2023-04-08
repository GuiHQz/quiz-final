import { useState } from "react"
import * as Styles from "./styles"
import { ObjectiveQuestions } from "../../../features/pages/Quiz/data/objectiveQuestions"
import { Timer } from "../Timer"

interface ObjectiveQuestionsModalProps {
    onClose: () => void;
    questionNumber: number;
    /**
     * Quando for chamar a questão, o Type servirá para definir o padrão do título da questão
     */
    type: "image" | "text" | "video";
}

export const ObjectiveQuestionsModal: React.FC<ObjectiveQuestionsModalProps> = ({
    type,
    onClose,
    questionNumber,
}) => {
    const objectiveQuestions = ObjectiveQuestions;
    const [selectedAlternative, setSelectedAlternative] = useState<string | null>(null);

    return (
        <Styles.Container>
            <Styles.Content>
                <Styles.Close onClick={onClose} />
                {type === "image" &&
                    <Styles.Header>
                        {objectiveQuestions[questionNumber].others.map(e =>
                            <div>
                                <h1>{e.title}</h1>
                                <Styles.Image>
                                    <img src={e.url} alt="" />
                                </Styles.Image>
                            </div>
                        )}
                        <Timer time={20} />
                    </Styles.Header>
                }

                {type === "text" &&
                    <Styles.Header>
                        {objectiveQuestions[questionNumber].others.map(e =>
                            <h1>{e.title}</h1>
                        )}
                        <Timer time={30}/>
                    </Styles.Header>
                }

                {type === "video" &&
                    <Styles.Header>
                        video questions
                        <Timer time={20}/>
                    </Styles.Header>
                }

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
            </Styles.Content>
        </Styles.Container>
    )
}