// --- OBTER LIMITE POR PROXY --- //
export type IGetLimitByProxyParams = {
  proxy: string;
};
export type IGetLimitByProxyResponse = {
  limite: number;
  disponivelCompra: number;
  disponivelSaque: number;
};

// --- ATUALIZAR LIMITE POR PROXY --- //
export type IUpdateLimitByProxyParams = {
  proxy: string;
};
export type IUpdateLimitByProxyBody = {
  novoLimite: number;
};
export type IUpdateLimitByProxyResponse = Record<string, never>; // resposta vazia
