import { IBCCAccountGender } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/account/common";

export interface ICardHolderDTO {
  /* Produto e Entregadora */
  produto: string;
  codigoEntregadora: string;

  /* Detalhes Cartão */
  tipoCartao: string;
  codigoPlastico: string;
  tipoPlastico: string;

  /* Empregador e Contrato */
  codigoEmpregador: number;
  nomeEmpregador: string;
  matricula: string;
  cargo: string;
  dataAdmissao: string;
  salario?: number;
  limiteCredito?: string;
  geraSenhaAtivacao: string;

  /* Informação Pessoal */
  nomeCompleto: string;
  nome: string;
  sobreNome: string;
  nomeSocial: string;
  dataNascimento: string;
  sexo: IBCCAccountGender;
  estadoCivil: string;
  nacionalidade: string;
  cpf: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;
  nomePai: string;
  nomeMae: string;
  ga?: string;

  /* Endereço */
  logradouro?: string;
  numero: string;
  complemento?: string;
  referencia?: string;
  bairro: string;
  cep: number;
  cidade: string;
  estado: string;
  pais: string;

  /* Contato */
  telefone: string;
  telefoneComercial?: string;
  celular?: string;
  email: string;
  proxy?: string;

  /* Financeiro e Contas */
  codigoBanco?: string;
  codigoAgencia?: string;
  codigoContaCorrente?: string;
  digitoContaCorrente?: string;
  codigoVencimentoFatura: string;
  tipoEnvioFatura: string;
  cnpjCorrespondente?: string;

  /* Embossadora e Associacao */
  geraEmbossing: string;
  embossadora: string;
  permiteAssociacaoMultipla?: boolean;
  RMC?: string;
}

export type IAddCardHolderDTO = ICardHolderDTO;

export type IAddCardHolderResDTO = {
  cartao: string;
  proxy: string;
  dataVencimento: string;
  nomeEmbossing: string;
  conta: string;
};

export interface IUpdateCardHolderDTO {
  /* Identificação */
  nomeCompleto: string;
  nome: string;
  sobrenome: string;
  nomeEmbossing: string;

  /* Informação Pessoal */
  dataNascimento: string;
  sexo: "M" | "F" | "S";
  estadoCivil: string;
  nacionalidade: string;

  /* Documentos */
  documento: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;

  /* Parental */
  nomeMae: string;
  nomePai: string;

  /* Endereço */
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: number;

  /* Contato */
  telefone: string;
  telefoneComercial: string;
  celular: string;
  email: string;
}

// --- CRIAR PORTADOR --- //
export interface ICreateCardHolderParams {
  nome: string;
  nomeCompleto: string;
  sobreNome: string;
  dataNascimento: string;
  email: string;
  estadoCivil: string;
  nacionalidade: string;
  nomeMae: string;
  nomePai: string;
  nomeSocial: string;
  sexo: string;
  telefone: string;
  telefoneComercial: string;
  celular: string;
  cpf: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  pais: string;
  nomeEmpregador: string;
  codigoEmpregador: string;
  matricula: string;
  cargo: string;
  dataAdmissao: string;
  salario: string;
  produto: string;
  tipoCartao: string;
  ga: string;
  limiteCredito: string;
  embossadora: string;
  geraSenhaAtivacao: string;
  codigoEntregadora: string;
  codigoPlastico: string;
  codigoVencimentoFatura: string;
  geraEmbossing: string;
  tipoEnvioFatura: string;
  tipoPlastico: string;
  proxy: string;
  RMC: string;
  codigoBanco: string;
  codigoAgencia: string;
  codigoContaCorrente: string;
  digitoContaCorrente: string;
  cnpjCorrespondente: string;
}

export interface ICreateCardHolderResponse {
  cartao: string;
  proxy: string;
  dataVencimento: string;
  nomeEmbossing: string;
  conta: string;
}
