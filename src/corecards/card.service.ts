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

// Banco de cartões em memória para simulação
export const cardDB: Record<string, ICardDTO> = {};

export class CorecardCardService implements ICorecardCardService {
  constructor(public client: GrecaleClient) {}

  async create(params: ICreateCardDTO): Promise<ICardDTO> {
    const token = await this.client.authenticate();
    const payload = createCardMapper.toClient(params);
    const card = await this.client.cardHolders.addCardHolder(payload, {
      token,
    });
    // Simula cartão criado com status ACTIVE
    const sdkCard = { ...createCardMapper.toSdk(card), status: CardStatus.ACTIVE };
    cardDB[sdkCard.idCorecard] = sdkCard;
    return sdkCard;
  }

  async getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {
    // Se existir no banco em memória, retorna de lá
    if (cardDB[params.idCorecard]) {
      return cardDB[params.idCorecard];
    }
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
    if (params.newStatus === CardStatus.CANCELED) {
      throw new Error("Não é permitido alterar o status para CANCELED");
    }
    // Altera o status no banco em memória, se existir
    if (cardDB[params.card.idCorecard]) {
      cardDB[params.card.idCorecard].status = params.newStatus;
      return true;
    }
    return false;
  }
}
