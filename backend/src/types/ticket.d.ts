type TCreateTicket = {
    client_id: string;
    title: string;
    description: string;
    type_maintenance: TypeMaintenance;
    priorit: Priorit;
    estimative_hours: Prisma.Decimal;
    observation?: string;
}

type TUpdateTicket = Partial<TCreateTicket>

type TTicketId = { id: string }