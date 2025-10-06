import styles from './styles.module.css';

type Props = {
  title: string;
  subtitle: string; 
}
export function PageTitle({ title, subtitle }: Props){
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}