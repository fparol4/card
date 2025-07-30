export type IGreecaleCardDTO = {
  id: string;
  cartao: string;
  proxy: string;
  nome: string;
  tipoDocumento: number;
  documento: string;
  status: number;
  descricaoStatus: string;
  lastDigits: string;
};

export type IGrecaleCardSensitiveDTO = {
  cartao: string;
  dataVencimento: string;
  cvc2: string;
} & IGreecaleCardDTO;

export type IUpdateCardStatusByProxyDTO = {
  proxy: string;
  body: {
    codStatus: string;
  };
};

export type IUpdateCardStatusByProxyResponse = {};
