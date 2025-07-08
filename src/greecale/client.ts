import axios, { AxiosInstance } from "axios";

import { ICorecardSettings } from "@src/corecards/types/corecard.types";
import { CardHoldersApi } from "./apis/card-holders";
import { CardApi } from "./apis/cards";
import { CryptApi } from "./apis/crypt";
import { InvoicesApi } from "./apis/invoices";
import { LimitsApi } from "./apis/limits";
import { TransactionsApi } from "./apis/transactions";
import { CardSecurityApi } from "./apis/card-security";

export class GrecaleClient {
  private client: AxiosInstance;

  public cards: CardApi;
  public cardSecurity: CardSecurityApi;
  public cardHolders: CardHoldersApi;
  public cryptApi: CryptApi;
  public invoicesApi: InvoicesApi;
  public limitsApi: LimitsApi;
  public transactionsApi: TransactionsApi;

  constructor(params: ICorecardSettings) {
    const { apiUrl, credentials } = params;
    this.client = axios.create({ baseURL: apiUrl });
    this.cryptApi = new CryptApi(this.client);
    this.cards = new CardApi(this.client, this.cryptApi);
    this.cardHolders = new CardHoldersApi(this.client);
    this.cardSecurity = new CardSecurityApi(this.client);
    this.invoicesApi = new InvoicesApi(this.client);
    this.limitsApi = new LimitsApi(this.client);
    this.transactionsApi = new TransactionsApi(this.client);
  }
}
