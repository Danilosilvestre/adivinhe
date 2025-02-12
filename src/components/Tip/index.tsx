import Styles from "./styles.module.css";
import tipIcon from "../../assets/tip.svg";
type Props ={
  tip: string;
}

export function Tip( {tip}: Props) { 
  return (
    <div className={Styles.tip}>
      <img src={tipIcon} alt="icone de dica"/>

    <div>
      <h3>Dica</h3>
      <p>{tip}</p>
    </div>

    </div>
  )
} 