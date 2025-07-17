import { GrecaleClient } from "@src/greecale/client";
import { CorecardAccountService } from "./account.service";
import { CorecardCardService } from "./card.service";
import type {
  IBCC,
  IBCCSettings,
  IBCCAccount,
  IBCCCard,
} from "@bankeiro/bankeiro-backend-corecard";

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
