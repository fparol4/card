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

  async create(params: ICreateCardDTO): Promise<ICardDTO> {}

  async getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {}

  async getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]> {}

  async changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {}
}
