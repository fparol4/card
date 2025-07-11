import { GrecaleClient } from "@src/greecale/client";
import { CorecardAccountService } from "./account.service";
import { CorecardCardService } from "./card.service";
import { IBCCAccount } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/account";
import { IBCCCard } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card";
import {
  IBCC,
  IBCCSettings,
} from "@bankeiro/bankeiro-backend-corecard/src/index";

export class GrecaleSDK implements IBCC {
  private client: GrecaleClient;
  public account: IBCCAccount;
  public card: IBCCCard;

  constructor(settings: IBCCSettings) {
    this.client = new GrecaleClient(settings);
    this.account = new CorecardAccountService(this.client);
    this.card = new CorecardCardService(this.client);
  }
}
