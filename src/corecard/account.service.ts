import type { GrecaleClient } from "@src/client";
import {
  IBCCAccount,
  type IBCCAccountDTO,
  type IBCCCreateAccountDTO,
  type IBCCGetAccountDTO,
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
    return {
      idCorecard: "N/A",
      context: {},
    };
  }

  public async getOne(params: IBCCGetAccountDTO): Promise<IBCCAccountDTO> {
    return {
      idCorecard: "N/A",
      context: {},
    };
  }
}
