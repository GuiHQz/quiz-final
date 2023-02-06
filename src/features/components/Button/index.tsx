import * as Styles from "./styles"
import GpWhite from "../../../assets/imgs/gamepad.png"
import GpPink from "../../../assets/imgs/gamepad-pink.png"
import { useState } from "react"

interface ButtonProps {
  /**
   * Propriedade responsável de permitir o botão ser clicável
   */
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  onClick
}) => {
  const [image, setImage] = useState<string>();

  return (
    <Styles.Container>
      <Styles.Button
        onMouseOver={() => setImage(GpPink)}
        onMouseOut={() => setImage(GpWhite)}
      >
        START QUIZ
        <img
          src={image || GpWhite}
          width="50px"
          height="32px"
        />
      </Styles.Button>
    </Styles.Container>
  )
}