type TSignIn = {
  email: string;
  password: string;
};

type TPayloadSignIn = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar_url: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type TSignUp = {
  name: string;
  email: string;
  password: string;
  role: "NIVEL_1" | "NIVEL_2" | "NIVEL_3";
};

