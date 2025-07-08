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
    // Retorna uma lista de cartões mockados
    return [
      {
        idCorecard: "mocked-card-1",
        status: 2, // CardStatus.ACTIVE
        context: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        idCorecard: "mocked-card-2",
        status: 5, // CardStatus.BLOCKED
        context: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  async changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {
    // Simula alteração de status
    return true;
  }
}
