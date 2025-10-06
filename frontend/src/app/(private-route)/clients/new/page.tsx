"use client";

import { PageTitle } from "@/components/PageTitle";
import { Textfield } from "@/components/Textfield";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { LuTicketSlash } from "react-icons/lu";
import styles from "./styles.module.css";

export default function NewClient() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Novo Cliente"
          subtitle="Cadastre um novo cliente no sistema"
        />
        <button className={styles.button} onClick={handleGoBack}>
          <FaArrowLeft size={24} /> Voltar
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <LuTicketSlash color="#000000" size={20} />
          <h2>Dados do Cliente</h2>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.formRow}>
            <Textfield label="Documento *" placeholder="CPF ou CNPJ" />
            <Textfield
              label="Nome do cliente *"
              placeholder="Nome completo ou razão social"
            />
          </div>
          <Textfield label="Empresa *" placeholder="Nome da empresa" />

          <div className={styles.formRow}>
            <Textfield
              label="Email principal *"
              placeholder="email@empresa.com"
            />
            <Textfield
              label="Telefone principal *"
              placeholder="(11) 9999-9999"
            />
            <Textfield label="Telefone 02" placeholder="(11) 9999-9999" />
          </div>

          <div className={styles.cardHeader } style={{ marginTop: '20px' }}>
            <LuTicketSlash color="#000000" size={20} />
            <h2>Endereço</h2>
          </div>

          <div className={styles.formRow}>
            <Textfield label="CEP *" placeholder="(11) 9999-9999" />
            <Textfield label="Estado *" placeholder="SP" />
            <Textfield label="Cidade *" placeholder="São Paulo" />
          </div>

          <div className={styles.formRow}>
            <Textfield label="Logradouro *" placeholder="Rua das Flores" />
            <Textfield label="Bairro *" placeholder="Jardim das Acácias" />
            <Textfield label="Número *" placeholder="01" type="number" />
            <Textfield label="Complemento *" placeholder="Apto 101" />
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={handleGoBack}>
              Cancelar
            </button>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Cadastrar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
