export type IAccountContext = Record<string, string>;

export type IGetAccountDTO = {
  idBankeiro?: string;
  idCorecard?: string;
  document?: string;
  context?: IAccountContext;
};

export type IAccountDTO = {
  idCorecard: string;
  context?: IAccountContext;
};

export type IAccountAddress = {
  zipcode: string;
  state: string;
  street: string;
  city: string;
  neighborhood: string;
  complement?: string;
  reference?: string;
};

export type IAccountBank = {
  code: string;
  agency: string;
  account: string;
  digit: string;
};

export enum IAccountType {
  "PF" = 1,
  "PJ" = 2,
}

export type ICreateAccountDTO = {
  email: string;
  name: string;
  type: IAccountType;

  // additional
  lastName?: string;
  motherName?: string;
  gender?: string; // "M | F" (PF) "S" (PJ)
  birthDate?: string;

  // -- documents
  cpf?: string;
  rg?: string;
  rgIssuingState?: string; // SP
  rgIssuingAuthority?: string; // SSP
  cnpj?: string;

  // -- contact
  contact: {
    phone: string;
    mobile: string;
  };

  bank: IAccountBank;
  address: IAccountAddress;
};

export type IAccountService = {
  createAccount: (params: ICreateAccountDTO) => Promise<IAccountDTO>;
  getAccount: (params: IGetAccountDTO) => Promise<IAccountDTO>;
};
