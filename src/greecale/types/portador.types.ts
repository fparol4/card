export interface IPortadorDTO {
  /* Product & Delivery */
  produto: number;
  codigoEntregadora: number;

  /* Card Details */
  tipoCartao: number;
  codigoPlastico: number;
  tipoPlastico: number;

  /* Employer & Contract */
  codigoEmpregador: number;
  nomeEmpregador: string;
  matricula: string;
  cargo: string;
  dataAdmissao: string;
  salario?: number;
  limiteCredito?: number;
  geraSenhaAtivacao: boolean;

  /* Personal Information */
  nomeCompleto: string;
  nome: string;
  sobreNome: string;
  nomeSocial: string;
  dataNascimento: string;
  sexo: "M" | "F" | "S";
  estadoCivil: string;
  nacionalidade: string;
  cpf: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;
  nomePai: string;
  nomeMae: string;
  ga?: string;

  /* Address */
  logradouro?: string;
  numero: string;
  complemento?: string;
  referencia?: string;
  bairro: string;
  cep: number;
  cidade: string;
  estado: string;
  pais: string;

  /* Contact */
  telefone: string;
  telefoneComercial?: string;
  celular?: string;
  email: string;
  proxy?: string;

  /* Financial & Billing */
  codigoBanco?: number;
  codigoAgencia?: number;
  codigoContaCorrente?: string;
  digitoContaCorrente?: string;
  codigoVencimentoFatura: number;
  tipoEnvioFatura: number;
  cnpjCorrespondente?: string;

  /* Embossing & Association */
  geraEmbossing: boolean;
  embossadora: string;
  permiteAssociacaoMultipla?: boolean;
  RMC?: string;
}

export type IAddPortadorDTO = IPortadorDTO;

export type IAddPortadorResDTO = {
  cartao: string;
  proxy: string;
  dataVencimento: string;
  nomeEmbossing: string;
  conta: string;
};

export interface IUpdatePortadorDTO {
  /* Identification */
  nomeCompleto: string;
  nome: string;
  sobrenome: string;
  nomeEmbossing: string;

  /* Personal Information */
  dataNascimento: string;
  sexo: "M" | "F" | "S";
  estadoCivil: string;
  nacionalidade: string;

  /* Documents */
  documento: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;

  /* Parental */
  nomeMae: string;
  nomePai: string;

  /* Address */
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: number;

  /* Contact */
  telefone: string;
  telefoneComercial: string;
  celular: string;
  email: string;
}
