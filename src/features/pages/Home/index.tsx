import React, { useEffect } from "react";
import * as Styles from "./styles"
import BackgroundImage from "../../../assets/background.jpg"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Styles.Container>
        <Styles.Bar>
          <Styles.TitleLink target="_blank" href="https://twitch.tv/guihz">
            <Styles.Title>
              QUIZ
              <Styles.Subtitle>
                TWITCH.TV/GUIHZ
              </Styles.Subtitle>
            </Styles.Title>
          </Styles.TitleLink>
          <Styles.UL>
            <Styles.LI>
              Home
            </Styles.LI>
            <Styles.LI>
              <Styles.LiButton onClick={() => {navigate("/quiz")}}>
                START QUIZ
              </Styles.LiButton>
            </Styles.LI>
          </Styles.UL>
        </Styles.Bar>
        <Styles.Background src={BackgroundImage}>
        </Styles.Background>
        <Styles.Wrapper>
          <Styles.WrapperContent>
            Regras
            <Styles.WrapperDescription>
              Clique aqui para ler as regras
            </Styles.WrapperDescription>
          </Styles.WrapperContent>
          <Styles.WrapperContent>
            Campeões
            <Styles.WrapperDescription>
              Clique aqui para ver a lista de campeões
            </Styles.WrapperDescription>
          </Styles.WrapperContent>
        </Styles.Wrapper>
        <Styles.Footer>
          Esse site foi desenvolvido por: <Styles.FooterDev target="_blank" href="https://github.com/GuiHQz">Guilherme Queiroz</Styles.FooterDev>
        </Styles.Footer>
      </Styles.Container>
    </>
  )
}

export default Home;