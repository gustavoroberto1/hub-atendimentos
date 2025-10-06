import styles from "./styles.module.css";

export function TypeTicket({
  type,
}: {
  type: "corrective" | "adaptive" | "preventive" | "predictive";
}) {
  function getTypeName(type: string) {
    switch (type) {
      case "corrective":
        return "Corretivo";
      case "adaptive":
        return "Adaptativo";
      case "preventive":
        return "Preventivo";
      case "predictive":
        return "Preditiva";
      default:
        return "Desconhecido";
    }
  }

  return (
    <div className={styles.typeTicket}>
      <div className={`${styles.type} ${styles[type]}`}>
        {getTypeName(type)}
      </div>
    </div>
  );
}
