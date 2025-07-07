// --- TRANSFERÊNCIAS --- //
export type ITransferDTO = {
  body: {
    linhaOrigem: number;
    linhaDestino: number;
    valorTransferencia: number;
  };
};

export type ITransferResponse = {
  dataHora: string;
  trace: number;
  valorTransferido: number;
};

// --- TRANSFERÊNCIAS POR PROXY --- //
export type ITransferByProxyDTO = ITransferDTO & {
  proxy: string;
};
export type ITransferByProxyResponse = ITransferResponse;

// --- TRANSFERÊNCIAS POR CARTÃO --- //
export type ITransferByCardDTO = ITransferDTO & {
  numeroCartao: string;
};
export type ITransferByCardResponse = ITransferResponse;

// --- ESTORNO MULTISALDO --- //
export type IRefundDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    linha: number;
  };
};

export type IRefundResponse = {
  trace: number;
  dataHora: string;
};

// --- ESTORNO MULTISALDO POR CARTÃO --- //
export type IRefundByCardDTO = {
  numeroCartao: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    linha: number;
  };
};
export type IRefundByCardResponse = IRefundResponse;

// --- DESCARGA PRÉ-PAGO POR PROXY --- //
export type IUnloadPrepaidByProxyDTO = {
  proxy: string;
  body: {
    moeda: number;
    valor: number;
  };
};
export type IUnloadPrepaidByProxyResponse = IRefundResponse;

// --- DESCARGA PRÉ-PAGO POR CARTÃO --- //
export type IUnloadPrepaidByCardDTO = {
  numeroCartao: string;
  body: {
    moeda: number;
    valor: number;
  };
};
export type IUnloadPrepaidByCardResponse = IRefundResponse;

// --- CARGA MULTISALDO POR PROXY --- //
export type ILoadByProxyDTO = {
  proxy: string;
  body: {
    moeda: number;
    valor: number;
    linha: number;
  };
};
export type ILoadByProxyResponse = IRefundResponse;

// --- CARGA MULTISALDO POR CARTÃO --- //
export type ILoadByCardDTO = {
  numeroCartao: string;
  body: {
    moeda: number;
    valor: number;
    linha: number;
  };
};
export type ILoadByCardResponse = IRefundResponse;

// --- AUTORIZAÇÃO POR PROXY --- //
export type IAuthorizationByProxyDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
  };
};
export type IAuthorizationByProxyResponse = IRefundResponse;

// --- AUTORIZAÇÃO PARCELADA POR PROXY --- //
export type IInstallmentAuthorizationByProxyDTO = {
  proxy: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
    planoVenda: number;
  };
};
export type IInstallmentAuthorizationByProxyResponse = IRefundResponse;

// --- AUTORIZAÇÃO POR CARTÃO --- //
export type IAuthorizationByCardDTO = {
  numeroCartao: string;
  body: {
    rubrica: number;
    moeda: number;
    valor: number;
  };
};
export type IAuthorizationByCardResponse = IAuthorizationByCardDTO;

// --- TRANSAÇÕES POR PROXY --- //
export type ITransactionByProxyResponse = {
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
export type IMultiBalanceTransactionByProxyResponse = {
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
export type IMultiBalanceTransactionByCardResponse = IMultiBalanceTransactionByProxyResponse;
export type ITransactionByCardResponse = ITransactionByProxyResponse;