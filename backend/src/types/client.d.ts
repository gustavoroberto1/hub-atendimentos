type TClientAddress = {
  postal_code: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number: number;
  complement?: string;
};

type TCreateClient = {
  document: string;
  name: string;
  enterprise_name: string;
  email: string;
  phone: string[];
  address: TClientAddress;
};

type TClient = TCreateClient & {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  deleted_at: Date | null;
};

type TUpdateClient = Partial<TCreateClient>;
