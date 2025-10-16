import { prisma } from "../prisma/client";

class ClientService {
  public async create(data: TCreateClient) {
    const alreadyExists = await prisma.client.findUnique({
      where: { document: data.document },
    });

    if (alreadyExists) {
      throw new Error("Client already exists");
    }

    const address = await prisma.address.create({
      data: {
        ...data.address,
        id: crypto.randomUUID(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return prisma.client.create({
      data: {
        id: crypto.randomUUID(),
        document: data.document,
        name: data.name,
        enterprise_name: data.enterprise_name,
        email: data.email,
        phone: data.phone,
        address_id: address.id,
        deleted: false,
        deleted_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  public async findOne(id: string) {
    const client = prisma.client.findUnique({
      where: { id },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }

  public async findAll() {
    return prisma.client.findMany();
  }

  public async update(id: string, data: TUpdateClient) {
    const client = await prisma.client.findUnique({
      where: { id },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    return prisma.client.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
        address: data.address
          ? {
              update: {
                ...data.address,
                updated_at: new Date(),
              },
            }
          : undefined,
      },
    });
  }

  public async delete(id: string) {
    const client = await prisma.client.findUnique({
      where: { id },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    return prisma.client.update({
      where: { id },
      data: { deleted: true, deleted_at: new Date() },
    });
  }
}

export const clientService = new ClientService();
