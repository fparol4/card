import axios, { AxiosInstance } from "axios";

import { CardHoldersApi } from "./apis/card-holders";
import { CardApi } from "./apis/cards";
import { CryptApi } from "./apis/crypt";
import { InvoicesApi } from "./apis/invoices";
import { LimitsApi } from "./apis/limits";
import { TransactionsApi } from "./apis/transactions";
import { CardSecurityApi } from "./apis/card-security";
import { requestOptions } from "./utils";
import { SDKError } from "@src/shared/error";
import { SDKAuthResDTO } from "./types/common";
import { IBCCSettings } from "@bankeiro/bankeiro-backend-corecard";

export class GrecaleClient {
  private client: AxiosInstance;
  public settings: IBCCSettings;

  public cards: CardApi;
  public cardSecurity: CardSecurityApi;
  public cardHolders: CardHoldersApi;
  public cryptApi: CryptApi;
  public invoicesApi: InvoicesApi;
  public limitsApi: LimitsApi;
  public transactionsApi: TransactionsApi;

  constructor(settings: IBCCSettings) {
    this.settings = settings;
    this.client = axios.create({ baseURL: settings.url });
    this.cryptApi = new CryptApi(this.client);
    this.cards = new CardApi(this.client, this.cryptApi);
    this.cardHolders = new CardHoldersApi(this.client);
    this.cardSecurity = new CardSecurityApi(this.client);
    this.invoicesApi = new InvoicesApi(this.client);
    this.limitsApi = new LimitsApi(this.client);
    this.transactionsApi = new TransactionsApi(this.client);
  }

  public async authenticate() {
    try {
      const { data } = await this.client.post<SDKAuthResDTO>(
        "/autenticacao/token-jwt",
        this.settings.credentials,
        requestOptions(),
      );

      return data.token;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
