import { IAccountType } from "@src/corecards/types";
import {
  IAccountAddressDTO,
  IAccountBankDTO,
  IAccountContactDTO,
  IAccountDTO,
} from "@src/corecards/types/account.types";

export const accountPFMock: IAccountDTO = {
  email: "alice.smith@example.com",
  name: "Alice",
  lastName: "Smith",
  motherName: "Maria Smith",
  gender: "F",
  birthDate: "1990-12-05",
  type: IAccountType.PF,

  cpf: "12345678909",
  rg: "12.345.678",
  rgIssuingState: "SP",
  rgIssuingAuthority: "SSP",

  contact: {
    phone: "(31) 3333-4444",
    mobile: "(31) 98888-7777",
  } as IAccountContactDTO,

  bank: {
    code: "237",
    agency: "1234",
    account: "567890",
    digit: "1",
  } as IAccountBankDTO,

  address: {
    zipcode: "30140071",
    state: "MG",
    city: "Belo Horizonte",
    street: "Av. Afonso Pena",
    neighborhood: "Centro",
    complement: "Sala 100",
    reference: "Próximo ao Museu de Arte",
  } as IAccountAddressDTO,
};
