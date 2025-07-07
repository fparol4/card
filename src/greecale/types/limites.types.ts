// --- OBTER LIMITE POR PROXY --- //
export type IObterLimitePorProxyParams = {
  proxy: string;
};
export type IObterLimitePorProxyResDTO = {
  limite: number;
  disponivelCompra: number;
  disponivelSaque: number;
};

// --- ATUALIZAR LIMITE POR PROXY --- //
export type IAtualizarLimitePorProxyParams = {
  proxy: string;
};
export type IAtualizarLimitePorProxyBody = {
  novoLimite: number;
};
export type IAtualizarLimitePorProxyResDTO = Record<string, never>; // resposta vazia
