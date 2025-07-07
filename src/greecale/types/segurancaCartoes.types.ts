// --- OBTER CVV POR PROXY --- //
export type IObterCVVPorProxyParams = {
  proxy: string;
};
export type IObterCVVPorProxyResDTO = {
  dataVencimento: string;
  cvv: string;
};

// --- VALIDAR CVV POR PROXY --- //
export type IValidarCVVPorProxyParams = {
  proxy: string;
};
export type IValidarCVVPorProxyBody = {
  cvv: string;
};
export type IValidarCVVPorProxyResDTO = {
  valid: boolean;
};

// --- OBTER SENHA POR PROXY --- //
export type IObterSenhaPorProxyParams = {
  proxy: string;
};
export type IObterSenhaPorProxyResDTO = {
  senha: string;
};

// --- ATUALIZAR SENHA POR PROXY --- //
export type IAtualizarSenhaPorProxyParams = {
  proxy: string;
};
export type IAtualizarSenhaPorProxyBody = {
  senhaAtual: string;
  senhaNova: string;
};
export type IAtualizarSenhaPorProxyResDTO = Record<string, never>; // resposta vazia

// --- CRIAR SENHA POR PROXY --- //
export type ICriarSenhaPorProxyParams = {
  proxy: string;
};
export type ICriarSenhaPorProxyBody = {
  senha: string;
};
export type ICriarSenhaPorProxyResDTO = Record<string, never>; // resposta vazia

// --- VALIDAR SENHA POR PROXY --- //
export type IValidarSenhaPorProxyParams = {
  proxy: string;
};
export type IValidarSenhaPorProxyBody = {
  senha: string;
};
export type IValidarSenhaPorProxyResDTO = {
  valid: boolean;
};

// --- CRIAR SENHA ALEATÓRIA POR PROXY --- //
export type ICriarSenhaAleatoriaPorProxyParams = {
  proxy: string;
};
export type ICriarSenhaAleatoriaPorProxyResDTO = {
  senha: string;
};
