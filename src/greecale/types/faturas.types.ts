// --- EXTRATO POR PROXY --- //
export type IExtratoPorProxyParams = {
  proxy: string;
  dataInicio: string;
  dataFim: string;
  pagina?: string;
};
export type IExtratoPorProxyResDTO = {
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
export type IFaturasAbertasPorProxyParams = {
  proxy: string;
};
export type IFaturasAbertasPorProxyResDTO = {
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
export type IFaturasFechadasPorProxyParams = {
  proxy: string;
};
export type IFaturasFechadasPorProxyResDTO = {
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
export type IDetalheFaturaPorProxyParams = {
  proxy: string;
  periodo: number;
  pagina?: string;
};
export type IDetalheFaturaPorProxyResDTO = {
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
export type IAtualizarVencimentoPorProxyParams = {
  proxy: string;
};
export type IAtualizarVencimentoPorProxyBody = {
  codigoVencimento: number;
};
export type IAtualizarVencimentoPorProxyResDTO = Record<string, never>; // resposta vazia
