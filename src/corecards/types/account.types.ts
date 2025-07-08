import { IAccountType } from ".";

export type IAccountContext = Record<string, string>;

/** DTOS **/
export type IGetAccountDTO = {
  idBankeiro?: string;
  idCorecard?: string;
  document?: string;
  context?: IAccountContext;
};

/** ACCOUNT **/
export type IAccountDTO = {
  idCorecard: string;
  context?: IAccountContext;
};

export type IAccountAddressDTO = {
  zipcode: string;
  state: string;
  street: string;
  city: string;
  neighborhood: string;
  complement?: string;
  reference?: string;
};

export type IAccountBankDTO = {
  code: string;
  agency: string;
  account: string;
  digit: string;
};

export type IAccountContactDTO = {
  phone: string;
  mobile: string;
};

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

  contact: IAccountContactDTO;
  bank: IAccountBankDTO;
  address: IAccountAddressDTO;
};

/** SERVICE **/
export type ICorecardAccountService = {
  create: (params: ICreateAccountDTO) => Promise<IAccountDTO>;
  getOne: (params: IGetAccountDTO) => Promise<IAccountDTO>;
};
