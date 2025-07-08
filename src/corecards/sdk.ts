import { SDKClient } from "@src/greecale/client";
import { CorecardAccountService } from "./account.service";
import { ICorecardAccountService } from "./types/account.types";
import { ICorecardCardService } from "./types/card.types";
import { CorecardCardService } from "./card.service";
import { ICorecard, ICorecardSettings } from "./types/corecard.types";

export class GrecaleSDK implements ICorecard {
  public account: ICorecardAccountService;
  public card: ICorecardCardService;

  constructor(settings: ICorecardSettings) {
    this.account = new CorecardAccountService({});
    this.card = new CorecardCardService({});
  }
}
