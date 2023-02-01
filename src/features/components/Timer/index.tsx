import { useEffect, useState } from "react";
import * as Styles from "./styles";

export const Timer: React.FC = () => {
  const [timer, setTimer] = useState(30);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000)
    }
    else {
      setTimer(0);
    }
  }, [timer])

  return (
    <div>
      <label>{minutes.toString().padStart(2, "0")}</label>
      <label>:</label>
      <label>{seconds.toString().padStart(2, "0")}</label>
    </div>
  );
}