import { GrecaleClient } from "@src/greecale/client";
import { CorecardAccountService } from "./account.service";
import { CorecardCardService } from "./card.service";
import {
  IBCC,
  IBCCAccount,
  IBCCCard,
  IBCCSettings,
} from "@bankeiro/bankeiro-backend-corecard";

export type IGrecaleSDKSettings = {
  CORECARD_URL: string;
  CORECARD_AUTH_KEY: string;
  CORECARD_AUTH_SECRET: string;
};

export class GrecaleSDK extends IBCC {
  private client: GrecaleClient;
  public account: IBCCAccount;
  public card: IBCCCard;

  constructor(settings: IBCCSettings) {
    super(settings);
    this.client = new GrecaleClient(settings as IGrecaleSDKSettings);
    this.account = new CorecardAccountService(this.client);
    this.card = new CorecardCardService(this.client);
  }
}
