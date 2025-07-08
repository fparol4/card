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
  constructor(public client: CorecardClient) {}

  create(params: ICreateCardDTO): Promise<ICardDTO> {}

  getOne(params: IGetCardDTO): Promise<ICardDTO | ICardSensitiveDTO> {}

  getAll(params: IGetAllCardsDTO): Promise<ICardDTO[]> {}

  changeStatus(params: IUpdateCardStatusDTO): Promise<boolean> {}
}
