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
  /* Person */
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

  /* Document */
  cpf: string;
  rg: string;
  orgaoEmissorRG: string;
  estadoEmissorRG: string;

  /* Address */
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  pais: string;

  /* Employment */
  nomeEmpregador: string;
  codigoEmpregador: string;
  matricula: string;
  cargo: string;
  dataAdmissao: string;
  salario: string;

  /* Product and Card Details */
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

  /* Bank Details */
  codigoBanco: string;
  codigoAgencia: string;
  codigoContaCorrente: string;
  digitoContaCorrente: string;

  /* Correspondant */
  cnpjCorrespondente: string;
}

export type INewPortadorResDTO = {
  cartao: string;
  proxy: string;
  dataVencimento: string;
  nomeEmbossing: string;
  conta: string;
};

// --- TRANSFERENCIAS --- //

export type ITransferDTO = {
  body: {
    linhaOrigem: number;
    linhaDestino: number;
    valorTransferencia: number;
  };
}

export type ITransferResDTO = {
  dataHora: string;
  trace: number;
  valorTransferido: number;
};

// --- TRANSFERENCIAS POR PROXY --- //

export type ITransferByProxyDTO = ITransferDTO & {
  proxy: string;
};

export type ITransferByProxyResDTO = ITransferResDTO;

// --- TRANSFERENCIAS POR CARTÃO --- //

export type ITransferByCardDTO = ITransferDTO & {
  numeroCartao: string;
};

export type ITransferByCardResDTO = ITransferResDTO;

// --- ESTORNO MULTISALDO --- //

export type IEstornoDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    linha: number;
  };
}

export type IEstornoResDTO = {
  trace: number;
  dataHora: string;
}
// --- ESTORNO MULTISALDO POR CARTÃO --- //

export type IEstornoCartaoDTO = {
  numeroCartao: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    linha: number;
  };
}

export type IEstornoCartaoResDTO = IEstornoResDTO;

// --- DESCARGA PRÉ-PAGO POR PROXY --- //

export type IDescargaPrePagoProxyDTO = {
  proxy: string;
  body: {
    moeda: number;
    valor: number;
  };
};

export type IDescargaPrePagoProxyResDTO = IEstornoResDTO;

//--- DESCARGA PRÉ-PAGO POR CARTÃO --- //
export type IDescargaPrePagoCartaoDTO = {
  numeroCartao: string;
  body: {
    moeda: number;
    valor: number;
  };
};

export type IDescargaPrePagoCartaoResDTO = IEstornoResDTO;

// --- CARGA MULTISALDO POR PROXY --- //
export type ICargaProxyDTO = {
  proxy: string;
  body: {
    moeda: number;
    valor: number;
    linha: number;
  };
};

export type ICargaProxyResDTO = IEstornoResDTO;

// --- CARGA MULTISALDO POR CARTÃO --- //
export type ICargaCartaoDTO = {
  numeroCartao: string;
  body: {
    moeda: number;
    valor: number;
    linha: number;
  };
};

export type ICargaCartaoResDTO = IEstornoResDTO;

// --- AUTORIZAÇÃO POR PROXY --- //
export type IAutorizacaoProxyDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
  };
};

export type IAutorizacaoProxyResDTO = IEstornoResDTO;

// --- AUTORIZAÇÃO PARCELADA POR PROXY --- //
export type IAutorizacaoParceladaProxyDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    planoVenda: number;
  };
};

export type IAutorizacaoParceladaProxyResDTO = IEstornoResDTO;

// --- AUTORIZAÇÃO POR CARTÃO --- //
export type IAutorizacaoCartaoDTO = {
  numeroCartao: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
  };
};

export type IAutorizacaoCartaoResDTO = IEstornoCartaoDTO;

// --- TRANSAÇÕES POR PROXY --- //

export type ITransacaoPorProxyResDTO = {
  id: number;
  cartao: {
    numero: string;
    proxy: string;
    produto: number;
  };
  detalhes: {
    dataHora: string;
    dataPostagem: string;
    tipo: number;
    operacao: string;
    status: string;
    terminal: string;
    rrn: string;
    timestamp: number;
    reversa: string;
    motivoDaNegativa: string;
    dataUtc: string;
    codigoUnico: string;
  };
  moeda: {
    origem: number;
    valorOrigem: number;
    valorLocal: number;
    valorInterno: number;
    valorTotal: number;
    taxaConversao: number;
    parcelas: number;
  };
  autorizacao: {
    numero: string;
    codigoResposta: string;
    codigoMCC: number;
    descricaoMCC: string;
  };
  estabelecimento: {
    id: string;
    planoDeVenda: string;
  };
  local: {
    pais: number;
    descricao: string;
    bandeira: string;
  };
  adicional: string;
};

// --- TRANSAÇÕES MULTISALDO POR PROXY --- //
export type ITransacaoMultiSaldoPorProxyResDTO = {
  tipo: string;
  cartao: string;
  idAutorizacao: number;
  idMovimento: number;
  data: string;
  entryMode: number;
  linhaCredito: number;
  estabelecimento: string;
  codMCC: number;
  descMCC: string;
  parcela: string;
  moedaOrigem: number;
  valorOrigem: number;
  valorML: number;
};

export type ITransacaoMultiSaldoPorCartaoResDTO = ITransacaoMultiSaldoPorProxyResDTO;

export type ITransacaoPorCartaoResDTO = ITransacaoPorProxyResDTO;