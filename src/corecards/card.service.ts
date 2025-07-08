import { GrecaleClient } from "@src/greecale/client";
import {
  ICardDTO,
  ICardSensitiveDTO,
  ICorecardCardService,
  ICreateCardDTO,
  IGetAllCardsDTO,
  IGetCardDTO,
  IUpdateCardStatusDTO,
} from "./types/card.types";

export class CorecardCardService implements ICorecardCardService {
  constructor(public client: GrecaleClient) {}

  create(params: ICreateCardDTO): Promise<ICardDTO> {}

  getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {}

  getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]> {}

  changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {}
}
