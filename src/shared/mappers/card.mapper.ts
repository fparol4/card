import type {
  IBCCCardDTO,
  IBCCCardSensitiveDTO,
} from "@bankeiro/bankeiro-backend-corecard";

import type {
  IGrecaleCardSensitiveDTO,
  IGreecaleCardDTO,
} from "@src/client/types/card.types";

export const toClient = () => {};

const toDTO = (payload: IGreecaleCardDTO): IBCCCardDTO => {
  return {
    idCorecard: payload.id,
    holderName: payload.nome,
    status: payload.status,
  };
};

const toSensitiveDTO = (
  payload: IGrecaleCardSensitiveDTO,
): IBCCCardSensitiveDTO => {
  return {
    ...toDTO(payload),
    number: payload.cartao,
    cvv: payload.cvc2,
    expiration: payload.dataVencimento,
  };
};

export const cardMapper = {
  toDTO,
  toSensitiveDTO,
};
