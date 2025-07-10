import { GrecaleClient } from "@src/greecale/client";
import {
  ICardDTO,
  ICardSensitiveDTO,
  ICorecardCardService,
  ICreateCardDTO,
  IGetAllCardsDTO,
  IGetCardDTO,
  IUpdateCardStatusDTO,
  CardStatus,
} from "./types/card.types";

import { createCardMapper } from "@src/shared/mappers/create-card.mapper";
import { cardMapper } from "@src/shared/mappers/card.mapper";
import { logger } from "@src/greecale/utils";

export class CorecardCardService implements ICorecardCardService {
  constructor(private client: GrecaleClient) {}

  async create(params: ICreateCardDTO): Promise<ICardDTO> {
    const token = await this.client.authenticate();
    const payload = createCardMapper.toClient(params);
    const card = await this.client.cardHolders.addCardHolder(payload, {
      token,
    });
    return createCardMapper.toSdk(card);
  }

  async getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {
    const token = await this.client.authenticate();
    const card = await this.client.cards.getByProxy(params.idCorecard, {
      token,
    });
    if (params.withSensitive) {
      return cardMapper.toSensitiveDTO(card);
    }
    return cardMapper.toDTO(card);
  }

  async getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]> {
    const promises = params.cards.map((card) => this.getOne(card));
    const cards: ICardDTO[] = await Promise.all(promises);
    return cards;
  }

  async changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {}
}
