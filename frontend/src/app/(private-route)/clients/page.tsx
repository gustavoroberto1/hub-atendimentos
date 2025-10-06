'use client'

import { NoHaveData } from "@/components/NoHaveData";
import { PageTitle } from "@/components/PageTitle";
import { SkeletonClient } from "@/components/SkeletonClient";
import { getDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import styles from "./styles.module.css";

export default function Clients() {
  const isLoading = false;
  const router = useRouter();

  function handleNewClient() {
    router.push("/clients/new");
  }

  function handleEditClient(id: string) {
    router.push(`/clients/edit/${id}`);
  }

  const clients: TClient[] = [
    {
      id: "1",
      name: "Empresa ABC Ltda",
      email: "contato@empresaabc.com",
      phone: "(11) 9999-9999",
      company: "Empresa ABC Ltda",
      address: "Rua das Flores, 123 - São Paulo, SP",
      contactPerson: "João Silva",
      status: "active",
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z",
    },
    {
      id: "2",
      name: "Tech Solutions",
      email: "admin@techsolutions.com",
      phone: "(11) 8888-8888",
      company: "Tech Solutions",
      address: "Av. Paulista, 456 - São Paulo, SP",
      contactPerson: "Maria Santos",
      status: "active",
      createdAt: "2024-01-10T14:30:00Z",
      updatedAt: "2024-01-10T14:30:00Z",
    },
    {
      id: "3",
      name: "StartupXYZ",
      email: "hello@startupxyz.com",
      phone: "(11) 7777-7777",
      company: "StartupXYZ",
      address: "Rua da Inovação, 789 - São Paulo, SP",
      contactPerson: "Pedro Costa",
      status: "inactive",
      createdAt: "2024-01-05T09:15:00Z",
      updatedAt: "2024-01-20T16:45:00Z",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Clientes"
          subtitle="Gerencie os clientes cadastrados no sistema"
        />
        <button className={styles.button} onClick={handleNewClient}>
          <GoPlus size={24} /> Novo Cliente
        </button>
      </div>

      <div className={styles.card}>
        {!isLoading && clients.length !== 0 ? (
          <div className={styles.cardHeader}>
            <TbUsers color="#000000" size={20} />
            <h2>Clientes Cadastrados ({clients.length})</h2>
          </div>
        ) : null}

        {isLoading ? (
          <SkeletonClient />
        ) : !isLoading && clients.length === 0 ? (
          <NoHaveData />
        ) : (
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Cliente</th>
                <th>Empresa</th>
                <th>Contato</th>
                <th>Status</th>
                <th>Cadastrado em</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <th className={styles.clientInfo}>
                    <span>{client.name}</span>
                    <p>{client.email}</p>
                  </th>
                  <th className={styles.clientInfo}>
                    <span>{client.name}</span>
                    <p>{client.email}</p>
                  </th>
                  <th>{client.phone}</th>
                  <th>
                    <div
                      className={`${styles.status} ${
                        client.status === "active"
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      {client.status === "active" ? "Ativo" : "Inativo"}
                    </div>
                  </th>
                  <th>{getDate(client.createdAt)}</th>
                  <th className={styles.actions}>
                    <div onClick={() => handleEditClient(client.id)}>
                      <BsThreeDots  />
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
