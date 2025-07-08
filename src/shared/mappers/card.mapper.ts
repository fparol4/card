import { ICardDTO, ICardSensitiveDTO } from "@src/corecards/types/card.types";
import {
  GrecaleCardSensitiveDTO,
  GreecaleCardDTO,
} from "@src/greecale/types/card.types";

export const toClient = () => {};

const toDTO = (payload: GreecaleCardDTO): ICardDTO => {
  return {
    idCorecard: payload.proxy,
    status: payload.status,
  };
};

const toSensitiveDTO = (
  payload: GrecaleCardSensitiveDTO,
): ICardSensitiveDTO => {
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
