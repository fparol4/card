import { GrecaleClient } from "@src/greecale/client";
import { CorecardAccountService } from "./account.service";
import { ICorecardAccountService } from "./types/account.types";
import { ICorecardCardService } from "./types/card.types";
import { CorecardCardService } from "./card.service";
import { ICorecard, ICorecardSettings } from "./types/corecard.types";

export class GrecaleSDK implements ICorecard {
  private client: GrecaleClient;

  public account: ICorecardAccountService;
  public card: ICorecardCardService;

  constructor(settings: ICorecardSettings) {
    this.client = new GrecaleClient(settings);
    this.account = new CorecardAccountService(this.client);
    this.card = new CorecardCardService(this.client);
  }
}
