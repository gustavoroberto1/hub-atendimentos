import { TbMoodSadDizzy } from "react-icons/tb";
import styles from "./styles.module.css";

export function NoHaveData() {
  return (
    <div className={styles.noHaveData}>
      <TbMoodSadDizzy size={100}/>
      <h2>Ops!!!</h2>
      <p>Não conseguimos encontrar nenhum dado para ser exibido.</p>
    </div>
  )
}