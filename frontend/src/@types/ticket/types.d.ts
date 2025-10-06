type TTicket = {
  id: string
  title: string
  description: string
  clientId: string
  clientName: string
  type: "corrective" | "adaptive" | "predictive" | "preventive"
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in-progress" | "waiting" | "resolved" | "closed"
  assigneeId?: string
  assigneeName?: string
  createdAt: string
  updatedAt: string
  resolvedAt?: string
  estimatedHours?: number
  actualHours?: number
  notes?: string
}