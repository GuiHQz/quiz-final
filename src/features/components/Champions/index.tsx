import * as Styles from "./styles"
import Logo from "../../../assets/imgs/user-logo.png"

export const Champions: React.FC = () => {
  return (
    <Styles.Container>
      <h1>CAMPEÕES</h1>
      <Styles.Table>
        <Styles.Participants>
          <Styles.Name>Nome</Styles.Name>
          <Styles.Score>PV</Styles.Score>
        </Styles.Participants>
        <Styles.Participants>
          <Styles.Name>Participante 1</Styles.Name>
          <Styles.Score>10</Styles.Score>
          
        </Styles.Participants>
      </Styles.Table>
    </Styles.Container>
  )
}