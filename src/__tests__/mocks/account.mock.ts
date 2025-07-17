import {
  IBCCAccountDTO,
  IBCCAccountInfoDTO,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/account/account";
import {
  IBCCAccountContactDTO,
  IBCCAccountBankDTO,
  IBCCAccountAddressDTO,
  IBCCAccountType,
  IBCCAccountInvoiceType,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/account/common";

export const accountPF: IBCCAccountInfoDTO = {
  email: "alice.smith@example.com",
  name: "Alice",
  lastName: "Smith",
  motherName: "Maria Smith",
  gender: "F",
  birthDate: "19901205",
  type: IBCCAccountType.PF,
  dueDate: "10",
  invoiceType: IBCCAccountInvoiceType.Email,

  cpf: "47988302086",
  rg: "12.345.678",
  rgIssuingState: "SP",
  rgIssuingAuthority: "SSP",

  occupation: {
    salary: "3000",
  },
  contact: {
    phone: {
      areaCode: "11",
      number: "988887777",
    },
    mobile: {
      areaCode: "11",
      number: "988887777",
    },
  } as IBCCAccountContactDTO,

  bank: {
    code: "237",
    agency: "1234",
    account: "567890",
    digit: "1",
  } as IBCCAccountBankDTO,

  address: {
    zipcode: "30140071",
    state: "MG",
    city: "Belo Horizonte",
    street: "Av. Afonso Pena",
    neighborhood: "Centro",
    complement: "Sala 100",
    reference: "Próximo ao Museu de Arte",
  } as IBCCAccountAddressDTO,
};
