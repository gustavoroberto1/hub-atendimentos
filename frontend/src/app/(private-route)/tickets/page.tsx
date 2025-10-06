'use client'

import { NoHaveData } from "@/components/NoHaveData";
import { PageTitle } from "@/components/PageTitle";
import { PriorityTicket } from "@/components/PriorityTicket";
import { SkeletonTicket } from "@/components/SkeletonTicket";
import { StatusTicket } from "@/components/StatusTicket";
import { Textfield } from "@/components/Textfield";
import { TypeTicket } from "@/components/TypeTicket";
import { getDate, getTime } from "@/utils/formatDate";
import { getInitials } from "@/utils/getInitials";
import { useRouter } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { LuTicketSlash } from "react-icons/lu";
import styles from "./styles.module.css";

export default function Tickets() {
  const isLoading = false;
  const router = useRouter();

  const tickets: TTicket[] = [
    {
      id: "TK-001",
      title: "Sistema de login não funciona",
      description:
        "Usuários não conseguem fazer login no sistema. Erro 500 sendo retornado.",
      clientId: "1",
      clientName: "Empresa ABC Ltda",
      type: "corrective",
      priority: "high",
      status: "open",
      assigneeId: "2",
      assigneeName: "João Silva",
      createdAt: "2024-01-20T10:00:00Z",
      updatedAt: "2024-01-20T10:00:00Z",
      estimatedHours: 8,
    },
    {
      id: "TK-002",
      title: "Atualização do módulo de relatórios",
      description:
        "Cliente solicitou novas funcionalidades no módulo de relatórios para incluir gráficos interativos.",
      clientId: "2",
      clientName: "Tech Solutions",
      type: "adaptive",
      priority: "medium",
      status: "in-progress",
      assigneeId: "2",
      assigneeName: "Maria Santos",
      createdAt: "2024-01-19T14:30:00Z",
      updatedAt: "2024-01-20T09:15:00Z",
      estimatedHours: 16,
      actualHours: 8,
    },
    {
      id: "TK-003",
      title: "Backup automático falhou",
      description:
        "Sistema de backup automático não está funcionando há 3 dias.",
      clientId: "3",
      clientName: "StartupXYZ",
      type: "preventive",
      priority: "low",
      status: "waiting",
      assigneeId: "2",
      assigneeName: "Pedro Costa",
      createdAt: "2024-01-18T09:15:00Z",
      updatedAt: "2024-01-19T16:45:00Z",
      estimatedHours: 4,
    },
    {
      id: "TK-004",
      title: "Performance lenta no dashboard",
      description:
        "Dashboard está carregando muito lentamente, afetando a produtividade dos usuários.",
      clientId: "1",
      clientName: "Empresa ABC Ltda",
      type: "predictive",
      priority: "critical",
      status: "resolved",
      assigneeId: "2",
      assigneeName: "Ana Lima",
      createdAt: "2024-01-15T11:20:00Z",
      updatedAt: "2024-01-18T14:30:00Z",
      resolvedAt: "2024-01-18T14:30:00Z",
      estimatedHours: 12,
      actualHours: 10,
    },
  ];

  function handleNewTicket() {
    router.push("/tickets/new");
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Atendimentos"
          subtitle="Gerencie os atendimentos de manutenção"
        />
        <button className={styles.button} onClick={handleNewTicket}>
          <GoPlus size={24} /> Novo Atendimento
        </button>
      </div>
           
      <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FiFilter  color="#000000" size={20} />
            <h2>Filtros</h2>
          </div>

          <div className={styles.search}>
            <Textfield label="Buscar chamados" placeholder="Buscar por título, descrição, cliente..."/>
          </div>

          <div className={styles.filters}>
            <Textfield label="Status" placeholder="Todos os status"/>
            <Textfield label="Tipo de Manutenção" placeholder="Todos os tipos"/>
            <Textfield label="Prioridade" placeholder="Todas as prioridades"/>
          </div>
      </div>

      <div className={styles.card}>
        {!isLoading && tickets.length !== 0 ? (
          <div className={styles.cardHeader}>
            <LuTicketSlash color="#000000" size={20} />
            <h2>Atendimentos ({tickets.length})</h2>
          </div>
        ) : null}

        {isLoading ? (
          <SkeletonTicket />
        ) : !isLoading && tickets.length === 0 ? (
          <NoHaveData />
        ) : (
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Atendimento</th>
                <th>Cliente</th>
                <th>Tipo</th>
                <th>Prioridade</th>
                <th>Status</th>
                <th>Responsável</th>
                <th>Criado em</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <th className={styles.secondInfo}>
                    <span>{ticket.id}</span>
                    <p>{ticket.title}</p>
                  </th>
                  <th className={styles.thirdInfo}>
                    <span>{ticket.clientName}</span>
                    <p>{ticket.estimatedHours}h estimadas</p>
                  </th>
                  <th>
                    <TypeTicket type={ticket.type} />
                  </th>
                  <th>
                    <PriorityTicket priority={ticket.priority} />
                  </th>
                  <th>
                    <StatusTicket status={ticket.status} />
                  </th>
                  <th>
                    <div className={styles.assignee}>
                      <div className={styles.assigneeInitials}>{getInitials(ticket.assigneeName)}</div>
                      <p>{ticket.assigneeName}</p>
                    </div>
                  </th>
                  <th className={styles.thirdInfo}>
                    <span>{getDate(ticket.createdAt)}</span>
                    <p>{getTime(ticket.createdAt)}</p>
                  </th>
                  <th className={styles.actions}>
                    <div>
                      <BsThreeDots />
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
