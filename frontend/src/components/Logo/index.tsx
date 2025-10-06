import styles from './styles.module.css'

export function Logo({ isLogin = true }: { isLogin?: boolean }) {
  return (
    <div className={isLogin ? styles.container : styles.containerMain}>
      <h1>Hub de</h1>
      <h2>Atendimentos</h2>
    </div>
  )
}