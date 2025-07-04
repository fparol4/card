export type GreecaleCardDTO = {
  proxy: string;
  nome: string;
  tipoDocumento: 1;
  documento: "80164809007";
  status: 1;
  descricaoStatus: "CARTAO APROVADO";
};

export type GrecaleCardSensitiveDTO = {
  cartao: string;
  dataVencimento: string;
  cvc2: string;
} & GreecaleCardDTO;
