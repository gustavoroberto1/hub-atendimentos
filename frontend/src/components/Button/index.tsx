import { ButtonHTMLAttributes } from "react";
import styles from './styles.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export function Button({ text, ...rest }: ButtonProps) {
  return <button className={styles.button} {...rest}>{text}</button>;
}