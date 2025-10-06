"use client";

import { PageTitle } from "@/components/PageTitle";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./styles.module.css";

export default function Dashboard() {
  const priorityData = [
    { name: "Baixa", value: 35, color: "#22c55e" },
    { name: "Média", value: 45, color: "#eab308" },
    { name: "Alta", value: 15, color: "#f97316" },
    { name: "Crítica", value: 5, color: "#ef4444" },
  ];

  const trendData = [
    { month: "Jan", abertos: 45, fechados: 38 },
    { month: "Fev", abertos: 52, fechados: 48 },
    { month: "Mar", abertos: 48, fechados: 52 },
    { month: "Abr", abertos: 61, fechados: 55 },
    { month: "Mai", abertos: 55, fechados: 58 },
    { month: "Jun", abertos: 58, fechados: 62 },
  ];

  const resolutionTimeData = [
    { type: "Corretiva", tempo: 3.2 },
    { type: "Adaptativa", tempo: 5.8 },
    { type: "Preditiva", tempo: 2.1 },
    { type: "Preventiva", tempo: 1.5 },
  ];

  const topClientsData = [
    { name: "Empresa A", chamados: 28 },
    { name: "Empresa B", chamados: 22 },
    { name: "Empresa C", chamados: 18 },
    { name: "Empresa D", chamados: 15 },
    { name: "Empresa E", chamados: 12 },
  ];

  const slaData = [
    { name: "Dentro do Prazo", value: 85, color: "#22c55e" },
    { name: "Fora do Prazo", value: 15, color: "#ef4444" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <PageTitle
          title="Dashboard"
          subtitle="Visão geral do sistema de manutenção"
        />
      </div>

      <div className={styles.firstLine}>
        <div className={styles.shortCard}>
          <h3>Chamado Abertos</h3>
          <div className={styles.contentCard}>
            <span>102</span>
            <p>+3 desde ontem</p>
          </div>
        </div>
        <div className={styles.shortCard}>
          <h3>Chamado Fechados</h3>
          <div className={styles.contentCard}>
            <span>102</span>
            <p>+12 esta semana</p>
          </div>
        </div>
        <div className={styles.shortCard}>
          <h3>Lead Time Médio</h3>
          <div className={styles.contentCard}>
            <span>102</span>
            <p>-0.5 dias vs mês anterior</p>
          </div>
        </div>
        <div className={styles.shortCard}>
          <h3>Tipos de Manutenção</h3>
          <div className={styles.contentCardList}>
            <div>
              <span>Corretiva</span>
              <strong>102</strong>
            </div>
            <div>
              <span>Adaptativa</span>
              <strong>45</strong>
            </div>
            <div>
              <span>Preditiva</span>
              <strong>30</strong>
            </div>
            <div>
              <span>Preventiva</span>
              <strong>15</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.hugeCard}>
          <h3>Distribuição por Prioridade</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={priorityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(Number(percent) * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.hugeCard}>
          <h3>Tendência de Chamados</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <Line
                type="monotone"
                dataKey="abertos"
                stroke="#ef4444"
                strokeWidth={2}
                name="Abertos"
              />
              <Line
                type="monotone"
                dataKey="fechados"
                stroke="#22c55e"
                strokeWidth={2}
                name="Fechados"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.hugeCard}>
          <h3>Tempo Médio de Resolução (dias)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resolutionTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Bar dataKey="tempo" fill="#3b82f6" name="Dias" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.hugeCard}>
          <h3>Top 5 Clientes com Mais Chamados</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topClientsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Bar dataKey="chamados" fill="#f97316" name="Chamados" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles.thirdLine}>
        <div className={styles.hugeCard}>
          <h3>Cumprimento de SLA</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={slaData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(Number(percent) * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {slaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
