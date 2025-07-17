import { GrecaleClient } from "@src/greecale/client";
import {
  IBCCAccount,
  IBCCAccountDTO,
  IBCCCreateAccountDTO,
  IBCCGetAccountDTO,
} from "@bankeiro/bankeiro-backend-corecard";

export class CorecardAccountService extends IBCCAccount {
  constructor(public client: GrecaleClient) {
    super();
  }

  /**
   O SDK Grecale registra uma conta junto 
   com a criação do cartão. Por conta disso, 
   não precisamos implementar nenhuma lógica aqui. 
   Para permanecer respeitando os contratos (e o fluxo)
   mantemos a implementação do método. 
   */
  public async create(params: IBCCCreateAccountDTO): Promise<IBCCAccountDTO> {
    // Retorna uma conta mockada
    return {
      idCorecard: "mocked-account-id",
      context: {},
    };
  }

  public async getOne(params: IBCCGetAccountDTO): Promise<IBCCAccountDTO> {
    // Retorna uma conta mockada com o id solicitado
    return {
      idCorecard: params.idCorecard || "mocked-account-id",
      context: {},
    };
  }
}
