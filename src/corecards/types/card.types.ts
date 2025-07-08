import {
  CardBrand,
  CardHolderType,
  CardStatus,
  CardType,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/enum";

import { IAccountDTO } from "../types/account.types";

export type ICardHolder = {
  type: CardHolderType;
  name?: string;
};

export type ICorecardContext = Record<string, string>;

/** DTOS **/
export type ICardDTO = {
  idCorecard: string;
  status: CardStatus;
  context?: ICorecardContext;
  createdAt?: string;
  updatedAt?: string;
};

export type ICardSensitiveDTO = ICardDTO & {
  number: string;
  expiration: string;
  cvv: string;
};

export type ICreateCardDTO = {
  account: IAccountDTO;
  holder: ICardHolder;
  type: CardType;
  brand: CardBrand;
};

export type IGetCardDTO = {
  idCorecard: string;
  withSensitive?: string;
  context?: ICorecardContext;
};

export type IGetAllCardsDTO = {
  account: IAccountDTO;
  cards: IGetCardDTO;
  context?: ICorecardContext;
};

export type IUpdateCardStatusDTO = {
  card: ICardDTO;
  newStatus: CardStatus;
};

/** SERVICE **/
export interface ICorecardCardService {
  create(params: ICreateCardDTO): Promise<ICardDTO>;
  getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO>;
  getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]>;
  changeStatus(params: IUpdateCardStatusDTO): Promise<boolean>;
}
