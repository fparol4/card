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

export type IAccountInfoDTO = {
  idCorecard: string;
  context?: IAccountContext;
};

export type AccountGender = "M" | "F" | "S";

export type IAccountDTO = {
  email: string;
  name: string;
  type: IAccountType;

  // additional
  lastName?: string;
  motherName?: string;
  gender?: AccountGender; // "M | F" (PF) "S" (PJ)
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

// -- requests
export type ICreateAccountDTO = IAccountDTO;

export type ICreateAccountResDTO = {
  idCorecard: string;
  context?: IAccountContext;
};

/** SERVICE **/
export type ICorecardAccountService = {
  create: (params: ICreateAccountDTO) => Promise<IAccountInfoDTO>;
  getOne: (params: IGetAccountDTO) => Promise<IAccountInfoDTO>;
};
