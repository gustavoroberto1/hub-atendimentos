import { CardItemSelect } from "@/components/CardItemSelect";
import { PageTitle } from "@/components/PageTitle";
import { Textarea } from "@/components/Textarea";
import { Textfield } from "@/components/Textfield";
import { FaArrowLeft } from "react-icons/fa6";
import { LuTicketSlash } from "react-icons/lu";
import styles from "./styles.module.css";

export default function NewTicket() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Novo Atendimento"
          subtitle="Abra um novo chamado de manutenção de software"
        />
        <button className={styles.button}>
          <FaArrowLeft size={24} /> Voltar
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <LuTicketSlash color="#000000" size={20} />
          <h2>Dados do chamado</h2>
        </div>

        <div className={styles.cardContent}>
          <Textfield label="Cliente *" placeholder="Selecione um cliente" />
          <Textfield
            label="Título do Atendimento *"
            placeholder="Descreva brevemente o problema ou solicitação"
          />
          <Textarea
            label="Descrição Detalhada *"
            placeholder="Descreva detalhadamente o problema, incluindo passos para reproduzir, mensagens de error, etc."
            rows={4}
          />

          <div className={styles.gridTwoColumns}>
            <div className={styles.gridItem}>
              <h2>Tipo de Manutenção *</h2>
              <CardItemSelect type="maintenance" value="corrective" />
              <CardItemSelect type="maintenance" value="adaptive" />
              <CardItemSelect type="maintenance" value="predictive" />
              <CardItemSelect type="maintenance" value="preventive" />
            </div>
            <div className={styles.gridItem}>
              <h2>Prioridade *</h2>
              <CardItemSelect type="priority" value="low" />
              <CardItemSelect type="priority" value="medium" />
              <CardItemSelect type="priority" value="high" />
              <CardItemSelect type="priority" value="critical" />
            </div>
          </div>
          <Textfield
            label="Estimativa de Horas *"
            placeholder="Estimativa inicial de horas necessárias para resolução. Ex: 8"
            type="number"
          />
          <Textarea
            label="Observações Adicionais"
            placeholder="Descreva detalhadamente o problema, incluindo passos para reproduzir, mensagens de error, etc."
            rows={4}
          />

          <div className={styles.buttonGroup}>
            <button className={styles.button}>Cancelar</button>
            <button className={`${styles.button} ${styles.primaryButton}`}>Abrir Atendimento</button>
          </div>
        </div>
      </div>
    </div>
  );
}
