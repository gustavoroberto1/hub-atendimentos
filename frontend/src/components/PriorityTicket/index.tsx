import styles from "./styles.module.css";

export function PriorityTicket({
  priority,
}: {
  priority: "low" | "medium" | "high" | "critical";
}) {
  function getPriorityName(priority: string) {
    switch (priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      case "critical":
        return "Crítica";
      default:
        return "Desconhecido";
    }
  }

  return (
    <div className={styles.priorityTicket}>
      <div className={`${styles.priority} ${styles[priority]}`}>
        {getPriorityName(priority)}
      </div>
    </div>
  );
}
