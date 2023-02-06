import * as Styles from "./styles"
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Champions } from "../../components/Champions";
import userLogo from "../../../assets/imgs/user-logo.png"
import iconList from "../../../assets/imgs/form-list.png"
import BackgroundImage from "../../../assets/background.jpg"

const Home = () => {
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.BlockOne>
        <Styles.Body>
          <h1>RIVALS</h1>
          <h2>QUIZ</h2>
          <Button 
            // onClick={() => navigate("/quiz")}
          />
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