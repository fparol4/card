import {
  CardBrand,
  CardHolderType,
  CardType,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/enum";

import { IAccountDTO } from "../account/types";

export type ICardDTO = {};

export type ICardHolder = {
  type: CardHolderType;
  name: string;
};

export type ICreateCardDTO = {
  account: IAccountDTO;
  holder: ICardHolder;
  type: CardType;
  brand: CardBrand;
};

export interface ICorecardCard {
  create(params: ICreateCardDTO): Promise<ICardDTO>;
}
