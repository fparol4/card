import {
  IAccountDTO,
  ICorecardAccountService,
  ICreateAccountDTO,
  IGetAccountDTO,
} from "./types/account.types";

export class CorecardAccountService implements ICorecardAccountService {
  constructor(public client: CorecardClient) {}

  /**
   O SDK Grecale registra uma conta junto 
   com a criação do cartão. Por conta disso, 
   não precisamos implementar nenhuma lógica aqui. 
   Para permanecer respeitando os contratos (e o fluxo)
   mantemos a implementação do método. 
   */
  public async create(params: ICreateAccountDTO): Promise<IAccountDTO> {
    return {
      idCorecard: null,
    };
  }

  public async getOne(params: IGetAccountDTO): Promise<IAccountDTO> {
    // OPEN: How to implement the `getAccount` method ?
    return {
      idCorecard: null,
    };
  }
}
