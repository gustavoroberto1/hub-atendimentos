import { MdCancel, MdCheckCircle, MdHistory, MdNewReleases, MdSchedule } from "react-icons/md";
import styles from "./styles.module.css";

export function StatusTicket({
  status,
}: {
  status: "new" | "in-progress" | "in-validation" | "finished" | "cancel";
}) {
  function getStatusName(status: string) {
    switch (status) {
      case "new":
        return "Novo";
      case "in-progress":
        return "Em Andamento";
      case "in-validation":
        return "Aguardando";
      case "finished":
        return "Resolvido";
      case 'closed':
        return "Fechado";
      default:
        return "Desconhecido";
    }
  }

  function getIcon(status: string) {
    switch (status) {
      case "new":
        return <MdNewReleases size={16}/>;
      case "in-progress":
        return <MdSchedule size={16}/>;
      case "in-validation":
        return <MdHistory size={16}/>;
      case "finished":
        return <MdCheckCircle size={16}/>;
      case "cancel":
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
