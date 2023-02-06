import React, { useEffect } from "react";
import * as Styles from "./styles"
import BackgroundImage from "../../../assets/background.jpg"
import { useNavigate } from "react-router-dom";
import iconList from "../../../assets/imgs/form-list.png"
import userLogo from "../../../assets/imgs/user-logo.png"
import { Champions } from "../../components/Champions";
import { Button } from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.BlockOne>
        <Styles.Body>
          <h1>Rivals Quiz</h1>
          <Button />
        </Styles.Body>
        <Styles.Footer>
          <Styles.BlockFooterOne>
            <img src={iconList} height="90px" width="90px" />
            <h2>Rules</h2>
          </Styles.BlockFooterOne>
          <Styles.BlockFooterTwo>
            <img src={userLogo} width="105px" />
            <h2>About me</h2>
          </Styles.BlockFooterTwo>
        </Styles.Footer>
      </Styles.BlockOne>
      <Styles.BlockTwo>
        <Champions />
      </Styles.BlockTwo>
    </Styles.Container>
  )
}

export default Home;