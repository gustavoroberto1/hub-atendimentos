import { User } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { prisma } from "../prisma/client";

class UserService {
  public async register({
    name,
    email,
    password,
    role,
  }: TSignUp): Promise<void> {
    const userExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExist) {
      throw new Error("E-mail já cadastrado!");
    }

    const passwordHashed = await hash(password, 10);

    const user: User = {
      id: crypto.randomUUID(),
      name: name,
      email: email,
      password: passwordHashed,
      avatar: null,
      role: role,
      created_at: new Date(),
      updated_at: new Date(),
    };

    await prisma.user.create({ data: user });
  }

  public async login({ email, password }: TSignIn): Promise<TPayloadSignIn> {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      throw new Error("Credencias Inválidas.");
    }

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new Error("Credencias Inválidas.");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };
  }
}

export const userService = new UserService();
