import {
  IBCCCardDTO,
  IBCCCardSensitiveDTO,
} from "@bankeiro/bankeiro-backend-corecard";

import {
  IGrecaleCardSensitiveDTO,
  IGreecaleCardDTO,
} from "@src/greecale/types/card.types";

export const toClient = () => {};

const toDTO = (payload: IGreecaleCardDTO): IBCCCardDTO => {
  return {
    idCorecard: payload.id,
    status: payload.status,
  };
};

const toSensitiveDTO = (
  payload: IGrecaleCardSensitiveDTO,
): IBCCCardSensitiveDTO => {
  return {
    idCorecard: payload.id,
    status: payload.status,
    number: payload.cartao,
    cvv: payload.cvc2,
    expiration: payload.dataVencimento,
  };
};

export const cardMapper = {
  toDTO,
  toSensitiveDTO,
};
