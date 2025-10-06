import { MdCancel, MdCheckCircle, MdHistory, MdNewReleases, MdSchedule } from "react-icons/md";
import styles from "./styles.module.css";

export function StatusTicket({
  status,
}: {
  status: "open" | "in-progress" | "waiting" | "resolved" | "closed";
}) {
  function getStatusName(status: string) {
    switch (status) {
      case "open":
        return "Aberto";
      case "in-progress":
        return "Em Andamento";
      case "waiting":
        return "Aguardando";
      case "resolved":
        return "Resolvido";
      case 'closed':
        return "Fechado";
      default:
        return "Desconhecido";
    }
  }

  function getIcon(status: string) {
    switch (status) {
      case "open":
        return <MdNewReleases size={16}/>;
      case "in-progress":
        return <MdSchedule size={16}/>;
      case "waiting":
        return <MdHistory size={16}/>;
      case "resolved":
        return <MdCheckCircle size={16}/>;
      case "closed":
        return <MdCancel size={16}/>;
      default:
        return "⚪";
    }
  }

  return (
    <div>
      <div className={`${styles.status} ${styles[status]}`}>
        {getIcon(status)}
        {getStatusName(status)}
      </div>
    </div>
  );
}
