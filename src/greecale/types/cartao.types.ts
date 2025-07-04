export type GreecaleCardDTO = {
  proxy: string;
  nome: string;
  tipoDocumento: number;
  documento: string;
  status: number;
  descricaoStatus: string;
};

export type GrecaleCardSensitiveDTO = {
  cartao: string;
  dataVencimento: string;
  cvc2: string;
} & GreecaleCardDTO;
