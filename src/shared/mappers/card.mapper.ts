import {
  IBCCCardDTO,
  IBCCCardSensitiveDTO,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/card";
import {
  GrecaleCardSensitiveDTO,
  GreecaleCardDTO,
} from "@src/greecale/types/card.types";

export const toClient = () => {};

const toDTO = (payload: GreecaleCardDTO): IBCCCardDTO => {
  return {
    idCorecard: payload.proxy,
    status: payload.status,
  };
};

const toSensitiveDTO = (
  payload: GrecaleCardSensitiveDTO,
): IBCCCardSensitiveDTO => {
  return {
    idCorecard: payload.proxy,
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
