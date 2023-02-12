import * as Styles from "./styles"
import Logo from "../../../assets/imgs/user-logo.png"
import { ChampionsData } from "../../../data/champions"
import { useEffect, useState } from "react";

export const Champions: React.FC = () => {
  const championsData = ChampionsData;

  return (
    <Styles.Container>
      <h1>CAMPEÕES</h1>
      <Styles.Participants>
        <Styles.Name>Nome</Styles.Name>
        <Styles.Score>PV</Styles.Score>
      </Styles.Participants>
      <Styles.Table>
        {championsData.sort((a, b) => b.score - a.score).map(column =>
          <Styles.Participants>
            <Styles.Name>{column.name}</Styles.Name>
            <Styles.Score>{column.score}</Styles.Score>
          </Styles.Participants>
        )}
      </Styles.Table>
    </Styles.Container>
  )
}