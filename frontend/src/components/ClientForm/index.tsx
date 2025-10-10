import { LuBuilding2, LuTicketSlash } from "react-icons/lu";
import { Textfield } from "../Textfield";
import styles from "./styles.module.css";
import { ImLocation2 } from "react-icons/im";

type Props = {
  onGoBack: () => void;
}
export function ClientForm({ onGoBack }: Props) {


  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <LuBuilding2  color="#000000" size={20} />
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

        <div className={styles.cardHeader} style={{ marginTop: "20px" }}>
          <ImLocation2  color="#000000" size={20} />
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
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={onGoBack}>
          Cancelar
        </button>
        <button className={`${styles.button} ${styles.primaryButton}`}>
          Cadastrar Cliente
        </button>
      </div>
    </div>
  );
}
