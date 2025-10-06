"use client";

import { ClientForm } from "@/components/ClientForm";
import { PageTitle } from "@/components/PageTitle";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
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

      <ClientForm onGoBack={handleGoBack} />
    </div>
  );
}
