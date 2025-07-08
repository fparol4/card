import { GrecaleClient } from "@src/greecale/client";
import {
  IAccountDTO,
  IAccountInfoDTO,
  ICorecardAccountService,
  ICreateAccountDTO,
  IGetAccountDTO,
} from "./types/account.types";

export class CorecardAccountService implements ICorecardAccountService {
  constructor(public client: GrecaleClient) {}

  /**
   O SDK Grecale registra uma conta junto 
   com a criação do cartão. Por conta disso, 
   não precisamos implementar nenhuma lógica aqui. 
   Para permanecer respeitando os contratos (e o fluxo)
   mantemos a implementação do método. 
   */
  public async create(params: ICreateAccountDTO): Promise<IAccountInfoDTO> {
    // Retorna uma conta mockada
    return {
      idCorecard: 'mocked-account-id',
      context: {},
    };
  }

  public async getOne(params: IGetAccountDTO): Promise<IAccountInfoDTO> {
    // Retorna uma conta mockada com o id solicitado
    return {
      idCorecard: params.idCorecard || 'mocked-account-id',
      context: {},
    };
  }
}
