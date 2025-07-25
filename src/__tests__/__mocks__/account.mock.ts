import { AccountGender } from "@bankeiro/bankeiro-backend-commons";
import { IBCCAccountInfoDTO } from "@bankeiro/bankeiro-backend-corecard";

export const accountDTOMock = {
  id: "07154cf7-661d-438b-a536-65326c10b28e",
  idCorecard: "1322", // dock existing account
  idBankeiro: "07154cf7-661d-438b-a536-65326c10b28e",
  context: {
    idMultiApp: "1460",
  },
  email: "luiza.alves@mblabs.com.br",
  name: "Luiza Alves",
  motherName: "Bendita Teste",
  birthDate: "2004-11-09",
  invoiceType: 1,
  dueDate: "10",
  gender: AccountGender.MALE,
  type: 1,
  cpf: "04644792071",
  cnpj: "04644792071",
  companyName: "N/A",
  occupation: { salary: "N/A", profession: "N/A", type: "N/A" },
  bank: { code: "301", account: "49059", agency: "0001", digit: "9" },
  address: {
    state: "SP",
    city: "Monte Mor",
    neighborhood: "Residencial Parque do Café",
    street: "Rua José Geraldo Soares",
    number: "34",
    zipcode: "13199134",
    complement: "Casa A",
  },
  contact: { phone: "5519997970455", mobile: "5519997970455" },
} as IBCCAccountInfoDTO;
