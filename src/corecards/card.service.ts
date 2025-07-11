import { GrecaleClient } from "@src/greecale/client";
import { createCardMapper } from "@src/shared/mappers/create-card.mapper";
import { cardMapper } from "@src/shared/mappers/card.mapper";

import { IBCCCard } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/index";
import { IBCCCreateCardDTO } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/dtos/create";
import {
  IBCCGetAllCardsDTO,
  IBCCGetCardDTO,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/dtos/get";
import {
  IBCCCardDTO,
  IBCCCardSensitiveDTO,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/card";

export class CorecardCardService implements IBCCCard {
  constructor(private client: GrecaleClient) {}

  async create(params: IBCCCreateCardDTO): Promise<IBCCCardDTO> {
    const token = await this.client.authenticate();
    const payload = createCardMapper.toClient(params);
    const card = await this.client.cardHolders.addCardHolder(payload, {
      token,
    });
    return createCardMapper.toSdk(card);
  }

  async getOne(
    params: IBCCGetCardDTO,
  ): Promise<IBCCCardDTO | IBCCCardSensitiveDTO> {
    const token = await this.client.authenticate();
    const card = await this.client.cards.getByProxy(params.idCorecard, {
      token,
    });
    if (params.withSensitive) {
      return cardMapper.toSensitiveDTO(card);
    }
    return cardMapper.toDTO(card);
  }

  async getAll(params: IBCCGetAllCardsDTO): Promise<IBCCCardDTO[]> {
    const promises = params.cards.map((card) => this.getOne(card));
    const cards: IBCCCardDTO[] = await Promise.all(promises);
    return cards;
  }

  async changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {}
}
