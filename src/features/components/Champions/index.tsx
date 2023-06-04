import * as Styles from "./styles";
import Logo from "../../../assets/imgs/user-logo.png";
import { ChampionsData } from "../../data/champions";
import { useNavigate } from "react-router-dom";

export const Champions: React.FC = () => {
  const championsData = ChampionsData.sort((a, b) => b.score - a.score).slice(0, 5);
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <h1>CHAMPIONS</h1>
      <Styles.Participants>
        <Styles.Name><span>Name</span></Styles.Name>
        <Styles.Score><span>TW</span></Styles.Score>
      </Styles.Participants>
      <Styles.Table>
        {championsData.map((column) => (
          <Styles.Participants>
            <Styles.Name>{column.name}</Styles.Name>
            <Styles.Score>{column.score}</Styles.Score>
          </Styles.Participants>
        ))}
      </Styles.Table>
      <Styles.ChampionsButton onClick={() => navigate("/champions")}>
        See all champions
      </Styles.ChampionsButton>
    </Styles.Container>
  );
};
