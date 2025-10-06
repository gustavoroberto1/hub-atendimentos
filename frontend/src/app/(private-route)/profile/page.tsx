"use client";

import { PageTitle } from "@/components/PageTitle";
import { Textfield } from "@/components/Textfield";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { LuTicketSlash } from "react-icons/lu";
import styles from "./styles.module.css";

export default function Profile() {
  const router = useRouter();
  function handleGoBack() {
    router.back();
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Meu Perfil"
          subtitle="Gerencie suas informações pessoais e configurações"
        />
        <button className={styles.button} onClick={handleGoBack}>
          <FaArrowLeft size={24} /> Voltar
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderInfo}>
            <LuTicketSlash color="#000000" size={20} />
            <h2>Informações Pessoais</h2>
          </div>
          <p>Atualize suas informações de perfil</p>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.containerAvatar}>
            <div className={styles.avatar}>
              G
              <button>
                <IoCameraOutline size={20} color="#ffffff" strokeWidth={3} />
              </button>
            </div>
            <p>JPEG ou PNG. Máximo 2MB.</p>
          </div>
          <Textfield label="Nome Completo" placeholder="Seu nome completo" />
          <Textfield label="Email" placeholder="Seu email" />
          <Textfield label="Função" placeholder="Sua função" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderInfo}>
            <LuTicketSlash color="#000000" size={20} />
            <h2>Segurança</h2>
          </div>
          <p>Altere sua senha de acesso</p>
        </div>
        <div className={styles.cardContent}>
          <Textfield label="Senha Atual" placeholder="Digite sua senha atual" />
          <Textfield label="Nova Senha" placeholder="Digite sua nova senha" />
          <Textfield
            label="Confirme Nova Senha"
            placeholder="Confirme sua nova senha"
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderInfo}>
            <LuTicketSlash color="#000000" size={20} />
            <h2>Informações da Conta</h2>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.contentAccount}>
            <div className={styles.info}>
              <strong>ID do Usuário</strong>
              <span>123123123123123123123123</span>
            </div>
            <div className={styles.info}>
              <strong>Tipo de Conta</strong>
              <span>Administrador</span>
            </div>
          </div>
          <div className={styles.contentAccount}>
            <div className={styles.info}>
              <strong>Membro desde</strong>
              <span>01/01/2023</span>
            </div>
            <div className={styles.info}>
              <strong>Empresa</strong>
              <span>Empresa XYZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
