import type { GrecaleClient } from "@src/greecale/client";
import { createCardMapper } from "@src/shared/mappers/create-card.mapper";
import { cardMapper } from "@src/shared/mappers/card.mapper";
import {
  IBCCCard,
  type IBCCCreateCardDTO,
  type IBCCCardDTO,
  type IBCCGetCardDTO,
  type IBCCCardSensitiveDTO,
  type IBCCGetAllCardsDTO,
  type IBCCUpdateCardStatusDTO,
} from "@bankeiro/bankeiro-backend-corecard";

export class CorecardCardService extends IBCCCard {
  constructor(private client: GrecaleClient) {
    super();
  }

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
    const card = await this.client.cards.getById(params.idCorecard, {
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

  async changeStatus(params: IBCCUpdateCardStatusDTO): Promise<boolean> {
    const token = await this.client.authenticate();
    await this.client.cards.updateStatusById(
      params.card.idCorecard,
      params.newStatus,
      { token },
    );
    return true;
  }
}
