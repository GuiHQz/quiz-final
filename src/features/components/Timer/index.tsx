import { useEffect, useState } from "react";
import * as Styles from "./styles";

interface TimerProps {
  time: number
}

export const Timer: React.FC<TimerProps> = ({
  time
}) => {
  const [timer, setTimer] = useState(time);
  const [startTimer, setStartTimer] = useState(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  useEffect(() => {
    if (startTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimer(40);
      setStartTimer(false);
    }
  }, [startTimer, timer]);

  return (
    <Styles.Container>
      <Styles.Label>{minutes.toString().padStart(2, "0")}</Styles.Label>
      <Styles.Label>:</Styles.Label>
      <Styles.Label>{seconds.toString().padStart(2, "0")}</Styles.Label>
      <Styles.Button>
        <button onClick={handleStartTimer}>START</button>
      </Styles.Button>
    </Styles.Container>
  );
}