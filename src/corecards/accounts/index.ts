import {
  IAccountDTO,
  IAccountService,
  ICreateAccountDTO,
  IGetAccountDTO,
} from "@src/corecard/account/types";
import { SDKClient } from "@src/greecale/client";

export class AccountService implements IAccountService {
  constructor(public client: SDKClient) {}

  /**
   * GRECALE SDK DOES NOT NEED TO CREATE ACCOUNT.
   * THE "ACCOUNT" INFO IS PASSED DIRECTLY ON THE
   * createCard method. SO WE JUST RETURN THE RELATED
   * DOCUMENT THAT CAN BE USED AS REF.
   * */
  public async createAccount(params: ICreateAccountDTO): Promise<IAccountDTO> {
    return {
      idCorecard: null,
    };
  }

  public async getAccount(params: IGetAccountDTO): Promise<IAccountDTO> {
    // OPEN: How to implement the `getAccount` method ?
    return {
      idCorecard: null,
    };
  }
}
