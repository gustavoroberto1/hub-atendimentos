import { PriorityTicket } from "@/components/PriorityTicket";
import { TypeTicket } from "@/components/TypeTicket";

export function getMaintenanceType(value: string) {
  switch (value) {
    case "corrective":
      return {
        label: "Corretivo",
        description: "Correção de defeitos e bugs",
        budget: <TypeTicket type="corrective" />,
      };
    case "adaptive":
      return {
        label: "Adaptativo",
        description: "Adaptação a novos requisitos",
        budget: <TypeTicket type="adaptive" />,
      };
    case "preventive":
      return {
        label: "Preventivo",
        description: "Prevenção de problemas futuros",
        budget: <TypeTicket type="preventive" />,
      };
    case "predictive":
      return {
        label: "Preditivo",
        description: "Monitoramento e análise de dados",
        budget: <TypeTicket type="predictive" />,
      };
  }
}

export function getPriorityType(value: string) {
  switch (value) {
    case "high":
      return {
        label: "Alta",
        description: "Urgente",
        budget: <PriorityTicket priority="high" />,
      };
    case "medium":
      return {
        label: "Média",
        description: "Prazo normal",
        budget: <PriorityTicket priority="medium" />,
      };
    case "low":
      return {
        label: "Baixa",
        description: "Pode aguardar",
        budget: <PriorityTicket priority="low" />,
      };
    case "critical":
      return {
        label: "Crítica",
        description: "Impacto severo",
        budget: <PriorityTicket priority="critical" />,
      };
  }
}
