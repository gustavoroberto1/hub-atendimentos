import {
  getMaintenanceType,
  getPriorityType,
} from "@/utils/getDataTypeAndPriority";
import styles from "./styles.module.css";

type Props = {
  type: "maintenance" | "priority";
  value: string;
};
export function CardItemSelect({ type, value }: Props) {
  function getTypeCardItem() {
    if (type === "maintenance") {
      return getMaintenanceType(value);
    } else {
      return getPriorityType(value);
    }
  }

  const data = getTypeCardItem();

  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <div className={styles.select}>
          <input type="radio" />
          <span>{data?.label}</span>
        </div>
        {data?.budget}
      </div>
      <p className={styles.secondLine}>{data?.description}</p>
    </div>
  );
}
