import {
  IBCCAccountType,
  IBCCCardDTO,
  IBCCCardType,
  IBCCCreateCardDTO,
} from "@bankeiro/bankeiro-backend-corecard";
import {
  IAddCardHolderDTO,
  IAddCardHolderResDTO,
} from "@src/greecale/types/card-holder.types";

function toClient(params: IBCCCreateCardDTO): IAddCardHolderDTO {
  const { account, holder, type, brand } = params;

  const [name, ...lastname] = account.name.split(" ");
  const lastName = lastname.join(" ");
  const birthDate = account.birthDate.replace(/\D/g, "");

  const accountType = account.type === IBCCAccountType.PF ? "50" : "52";
  const cardType = params.type === IBCCCardType.PHYSICAL ? "1" : "4";
  const emboss = params.type === IBCCCardType.PHYSICAL ? "S" : "N";

  return {
    // Dados pessoais
    nome: name,
    nomeCompleto: account.name,
    sobreNome: lastName,
    nomeSocial: holder.name,
    dataNascimento: birthDate,
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
    cpf: account.cpf || "000",
    rg: account.rg || "000",
    orgaoEmissorRG: account.rgIssuingAuthority || "SSP",
    estadoEmissorRG: account.rgIssuingState || "SP",
    cnpjCorrespondente: account.cnpj || "000",

    // Endereço|
    logradouro: account.address.street,
    numero: account.address.number,
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

    // Banco
    codigoBanco: "1", // account.bank.code,
    codigoAgencia: account.bank.agency,
    codigoContaCorrente: account.bank.account,
    digitoContaCorrente: account.bank.digit,

    // Produto e cartão
    produto: accountType,
    tipoCartao: cardType,
    geraEmbossing: emboss,
    permiteAssociacaoMultipla: true,
    limiteCredito: "0",
    geraSenhaAtivacao: "1",
    codigoEntregadora: "11",
    codigoPlastico: "0",
    codigoVencimentoFatura: "1",
    tipoEnvioFatura: "E",
    tipoPlastico: "N",
    ga: "1",
    embossadora: "84",
    proxy: "0",
    RMC: "0",
  };
}

export const toSdk = (payload: IAddCardHolderResDTO): IBCCCardDTO => {
  return {
    idCorecard: payload.cartao,
    context: {
      conta: "494",
    },
  };
};

export const createCardMapper = {
  toClient,
  toSdk,
};
