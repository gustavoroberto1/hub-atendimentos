import { Status, Ticket } from "@prisma/client";
import { prisma } from "../prisma/client";

class TicketService {
    public async create(data: TCreateTicket) {

        const newTicket: Ticket = {
            ...data,
            id: crypto.randomUUID(),
            ticket_number: "",
            status: Status.NEW,
            observation: data.observation || null,
            created_by_id: "",
            responsible_id: null,
            created_at: new Date(),
            updated_at: new Date(),
        }

        await prisma.ticket.create({ data: newTicket });
    }

    public async findAll() {
        return await prisma.ticket.findMany();
    }

    public async findOne(id: string) {
        const ticketExist = await prisma.ticket.findUnique({ where: { id: id } })
        if (!ticketExist) {
            throw new Error("Ticket not found");
        }

        return ticketExist;
    }

    public async update(id: string, data: TUpdateTicket) {
        const ticketExist = await prisma.ticket.findUnique({ where: { id } });
        if (!ticketExist) {
            throw new Error("Ticket Not Found")
        }

        await prisma.ticket.update({
            where: { id: id },
            data: {
                ...ticketExist,
                ...data
            }
        })

    }
}

export const ticketService = new TicketService();
