export type SDKParams = {
  baseURL: string;
  credentials: SDKServerCredentials;
};

export type SDKRequestOptions = {
  requestId?: string;
  token?: string;
};

// --- AUTH ---

export type SDKServerCredentials = {
  key: string;
  secret: string;
};

export type SDKAuthResDTO = {
  token: string;
  expireAt: string;
};

// --- CRYPTOGRAPHY ---
export const CRIPT_ALGORITHM = "aes-128-cbc";

export type AESKey = {
  key: Buffer;
  iv: Buffer;
};

// -- PORTADOR (CARD-HOLDER) ---

export interface INewPortadorDTO {
  /* Pessoa */
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

  /* Documento */
  cpf: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;

  /* Endereço */
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  pais: string;

  /* Empregador */
  nomeEmpregador: string;
  codigoEmpregador: string;
  matricula: string;
  cargo: string;
  dataAdmissao: string;
  salario: string;

  /* Detalhes e Produto do Cartão */
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

  /* Detalhes do Banco */
  codigoBanco: string;
  codigoAgencia: string;
  codigoContaCorrente: string;
  digitoContaCorrente: string;

  /* Correspondente */
  cnpjCorrespondente: string;
}

export type INewPortadorResDTO = {
  cartao: string;
  proxy: string;
  dataVencimento: string;
  nomeEmbossing: string;
  conta: string;
};