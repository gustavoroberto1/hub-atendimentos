"use client";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { Textfield } from "@/components/Textfield";
import { GoGear } from "react-icons/go";
import styles from "./styles.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconBox}>
          <GoGear size={48} />
        </div>
        <div className={styles.formBox}>
          <Logo />
          <p>Faça login para acessar a plataforma de gestão de chamados</p>
          <form className={styles.form}>
            <Textfield label="Email" type="email" name="email" placeholder="Digite seu email" />
            <Textfield label="Senha" type="password" name="password" placeholder="Digite sua senha" />
            <Button text="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
}
