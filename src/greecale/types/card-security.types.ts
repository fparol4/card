// --- OBTER CVV POR PROXY --- //
export type IGetCvvByProxyParams = {
  proxy: string;
};
export type IGetCvvByProxyResponse = {
  dataVencimento: string;
  cvv: string;
};

// --- VALIDAR CVV POR PROXY --- //
export type IValidateCvvByProxyParams = {
  proxy: string;
};
export type IValidateCvvByProxyBody = {
  cvv: string;
};
export type IValidateCvvByProxyResponse = {
  valid: boolean;
};

// --- OBTER SENHA POR PROXY --- //
export type IGetPasswordByProxyParams = {
  proxy: string;
};
export type IGetPasswordByProxyResponse = {
  senha: string;
};

// --- ATUALIZAR SENHA POR PROXY --- //
export type IUpdatePasswordByProxyParams = {
  proxy: string;
};
export type IUpdatePasswordByProxyBody = {
  senhaAtual: string;
  senhaNova: string;
};
export type IUpdatePasswordByProxyResponse = Record<string, never>; // resposta vazia

// --- CRIAR SENHA POR PROXY --- //
export type ICreatePasswordByProxyParams = {
  proxy: string;
};
export type ICreatePasswordByProxyBody = {
  senha: string;
};
export type ICreatePasswordByProxyResponse = Record<string, never>; // resposta vazia

// --- VALIDAR SENHA POR PROXY --- //
export type IValidatePasswordByProxyParams = {
  proxy: string;
};
export type IValidatePasswordByProxyBody = {
  senha: string;
};
export type IValidatePasswordByProxyResponse = {
  valid: boolean;
};

// --- CRIAR SENHA ALEATÓRIA POR PROXY --- //
export type ICreateRandomPasswordByProxyParams = {
  proxy: string;
};
export type ICreateRandomPasswordByProxyResponse = {
  senha: string;
};
