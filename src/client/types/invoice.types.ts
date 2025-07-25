// --- EXTRATO POR PROXY --- //
export type IGetStatementByProxyParams = {
  proxy: string;
  dataInicio: string;
  dataFim: string;
  pagina?: string;
};
export type IGetStatementByProxyResponse = {
  tipo: string;
  idTransacao: number;
  idMovimento: number;
  data: string;
  entryMode: number;
  linha: number;
  estabelecimento: string;
  codigoMCC: number;
  descricaoMCC: string;
  parcela: string;
  moedaOrigem: number;
  valorOrigem: number;
  valor: number;
};

// --- FATURAS ABERTAS POR PROXY --- //
export type IGetOpenInvoicesByProxyParams = {
  proxy: string;
};
export type IGetOpenInvoicesByProxyResponse = {
  periodo: string;
  dataCorte: string;
  dataVencimento: string;
  saldoUltimaFatura: number;
  pagamentoMinimoUltimaFatura: number;
  valorPagamentos: number;
  valorCompras: number;
  valorSaques: number;
  valorTaxas: number;
  valorAjustes: number;
  valorMutas: number;
  valorMotas: number;
  valorEncargos: number;
  valorServicos: number;
  outrosValores: number;
  valorDebitos: number;
  valorCreditos: number;
  taxaRotativo: number;
  valorTotal: number;
};

// --- FATURAS FECHADAS POR PROXY --- //
export type IGetClosedInvoicesByProxyParams = {
  proxy: string;
};
export type IGetClosedInvoicesByProxyResponse = {
  periodo: string;
  dataCorte: string;
  dataVencimento: string;
  saldoAnterior: number;
  saldoFatura: number;
  pagamentoMinimo: number;
  valorSaques: number;
  valorTaxas: number;
  valorAjustes: number;
  valorMutas: number;
  valorMotas: number;
  valorEncargos: number;
  valorServicos: number;
  taxaRotativo: number;
  outrosValores: number;
  valorDebitos: number;
  valorCreditos: number;
}[];

// --- DETALHE DA FATURA POR PROXY --- //
export type IGetInvoiceDetailByProxyParams = {
  proxy: string;
  periodo: number;
  pagina?: string;
};
export type IGetInvoiceDetailByProxyResponse = {
  nome: string;
  dataMovimento: string;
  dataPostagem: string;
  rubrica: number;
  descricaoRubrica: string;
  codigoOperacao: number;
  moeda: number;
  parcela: number;
  totalParcela: number;
  entryMode: number;
  valor: number;
  valorOriginal: number;
  estabelecimento: string;
  idMovimento: number;
};

// --- ATUALIZAR VENCIMENTO POR PROXY --- //
export type IUpdateDueDateByProxyParams = {
  proxy: string;
};
export type IUpdateDueDateByProxyBody = {
  codigoVencimento: number;
};
export type IUpdateDueDateByProxyResponse = Record<string, never>; // resposta vazia
