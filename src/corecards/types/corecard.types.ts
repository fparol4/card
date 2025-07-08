import { ICorecardAccountService } from "./account.types";
import { ICorecardCardService } from "./card.types";

export type ICorecardSettings = {
  credentials: any;
  apiUrl: string;
};

export type ICorecard = {
  account: ICorecardAccountService;
  card: ICorecardCardService;
};
