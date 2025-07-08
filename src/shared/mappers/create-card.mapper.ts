import { IAccountType } from "@src/corecards/types";
import {
  CardType,
  ICardDTO,
  ICreateCardDTO,
} from "@src/corecards/types/card.types";
import {
  IAddCardHolderDTO,
  IAddCardHolderResDTO,
} from "@src/greecale/types/card-holder.types";

function toClient(params: ICreateCardDTO): IAddCardHolderDTO {
  const { account, holder, type, brand } = params;
  // @TODO: adicionar comentarios documentação

  return {
    // Dados pessoais
    nome: account.name,
    nomeCompleto: account.name + account.lastName,
    nomeSocial: holder.name,
    sobreNome: account.lastName,
    dataNascimento: account.birthDate,
    email: account.email,
    estadoCivil: "0",
    nacionalidade: "BRASILEIRO",
    nomeMae: account.motherName,
    nomePai: "N/A",
    sexo: account.gender,

    // CONTATO
    telefone: account.contact.phone,
    telefoneComercial: account.contact.phone,
    celular: account.contact.mobile,

    // DOCUMENTOS
    cpf: account.cpf || "00000000000",
    rg: account.rg || "0",
    orgaoEmissorRG: account.rgIssuingAuthority || "SSP",
    estadoEmissorRG: account.rgIssuingState || "SP",
    cnpjCorrespondente: account.cnpj || "0",

    // Endereço|
    logradouro: account.address.street,
    numero: "123", // mock
    complemento: account.address.complement || "",
    referencia: account.address.reference || "",
    bairro: account.address.neighborhood,
    cidade: account.address.city,
    cep: Number(account.address.zipcode) || 0,
    estado: account.address.state,
    pais: "76" /* FIXO 76 (BRASIL)*/,

    // Emprego
    nomeEmpregador: "Empresa Mock",
    codigoEmpregador: 1,
    matricula: "123456",
    cargo: "Desenvolvedor",
    dataAdmissao: "20220101",
    salario: 5000,

    // Produto e cartão
    produto: account.type === IAccountType.PF ? "50" : "52",
    tipoCartao: params.type === CardType.PHYSICAL ? "1" : "4",
    limiteCredito: "0",
    geraSenhaAtivacao: "1",
    codigoEntregadora: "11",
    codigoPlastico: "0",
    codigoVencimentoFatura: 1,
    geraEmbossing: params.type === CardType.PHYSICAL ? "S" : "N",
    tipoEnvioFatura: "E", // todo
    tipoPlastico: "N", // todo
    ga: "1",
    embossadora: "84",
    proxy: "0",
    RMC: "0",

    // Banco
    codigoBanco: Number(account.bank.code),
    codigoAgencia: Number(account.bank.agency),
    codigoContaCorrente: account.bank.account,
    digitoContaCorrente: account.bank.digit,
  };
}

export const toSdk = (payload: IAddCardHolderResDTO): ICardDTO => {
  return {
    idCorecard: payload.proxy,
    context: {
      conta: "494",
    },
  };
};

export const createCardMapper = {
  toClient,
  toSdk,
};
