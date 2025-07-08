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
import { createCardDTOToAddCardHolderDTO } from "./mappers/card.mapper";

export class CorecardCardService implements ICorecardCardService {
  constructor(public client: GrecaleClient) {}

  async create(params: ICreateCardDTO): Promise<ICardDTO> {
    const payload = createCardDTOToAddCardHolderDTO(params)
    const card = await this.client.cardHolders.addCardHolder(payload);
    return this._toDTO(card)
  }

  async getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {
    // Retorna um cartão mockado (com ou sem dados sensíveis)
    if (params.withSensitive) {
      return {
        idCorecard: params.idCorecard,
        status: 2, // CardStatus.ACTIVE
        context: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        number: '4111111111111111',
        expiration: '12/29',
        cvv: '123',
      };
    }
    return {
      idCorecard: params.idCorecard,
      status: 2, // CardStatus.ACTIVE
      context: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  async getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]> {
    // Retorna uma lista de cartões mockados
    return [
      {
        idCorecard: 'mocked-card-1',
        status: 2, // CardStatus.ACTIVE
        context: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        idCorecard: 'mocked-card-2',
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
