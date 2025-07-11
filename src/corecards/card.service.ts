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
  constructor(public client: GrecaleClient) {}

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
    const cardsToFetch = Array.isArray(params.cards) ? params.cards : [params.cards];
    const results: ICardDTO[] = [];
    for (const cardParams of cardsToFetch) {
      const card = await this.getOne(cardParams);
      results.push(card as ICardDTO);
    }
    return results;
  }

  async changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {
    console.log(params);
    if (params.card.status === params.newStatus) {
      throw new Error("Status é o mesmo.");
    }
    
    const token = await this.client.authenticate();
    
    await this.client.cards.updateStatusByProxy(
      params.card.idCorecard,
      params.newStatus,
      { token }
    );
    
    return true;
  }
}
