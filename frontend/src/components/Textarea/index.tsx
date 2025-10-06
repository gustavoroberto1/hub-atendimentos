import { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Textarea({ label, ...rest }: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <textarea {...rest} className={styles.input} />
    </div>
  );
}
