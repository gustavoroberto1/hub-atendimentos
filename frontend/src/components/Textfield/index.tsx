import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Textfield({ label, ...rest }: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input {...rest} className={styles.input} />
    </div>
  );
}
