import { IAccountDTO } from "../types/account.types";

export const enum CardType {
  VIRTUAL = 1,
  PHYSICAL = 2,
  PRIVATE_LABEL = 3,
  PHYSICAL_NO_NAME = 4,
}
export const enum CardBrand {
  MASTERCARD = 1,
  VISA = 2,
}
export const enum CardHolderType {
  HOLDER = 1,
  ADDITIONAL = 2,
}
export const enum CardStatus {
  CREATING = 1,
  ACTIVE = 2,
  BLOCKED = 5,
  CANCELED = 6,
}
export const enum CardProduct {
  DEBIT = 1,
  CREDIT = 2,
  PRIVATE_LABEL = 3,
}

export type ICardHolder = {
  type: CardHolderType;
  name?: string;
};

export type ICorecardContext = Record<string, string>;

/** DTOS **/
export type ICardDTO = {
  idCorecard: string;
  status?: CardStatus;
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
  withSensitive?: boolean;
  context?: ICorecardContext;
};

export type IGetAllCardsDTO = {
  account: IAccountDTO;
  cards: IGetCardDTO[];
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
