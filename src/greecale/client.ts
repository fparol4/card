import axios, { type AxiosInstance } from "axios";

import { CardHoldersApi } from "./apis/card-holders";
import { CardApi } from "./apis/cards";
import { CryptApi } from "./apis/crypt";
import { InvoicesApi } from "./apis/invoices";
import { LimitsApi } from "./apis/limits";
import { TransactionsApi } from "./apis/transactions";
import { CardSecurityApi } from "./apis/card-security";
import { requestOptions } from "./utils";
import { SDKError } from "@src/shared/error";
import type { SDKAuthResDTO } from "./types/common";
import { IGrecaleSDKSettings } from "@src/corecard/sdk";

export class GrecaleClient {
  private client: AxiosInstance;
  public settings: IGrecaleSDKSettings;

  public cards: CardApi;
  public cardSecurity: CardSecurityApi;
  public cardHolders: CardHoldersApi;
  public cryptApi: CryptApi;
  public invoicesApi: InvoicesApi;
  public limitsApi: LimitsApi;
  public transactionsApi: TransactionsApi;

  constructor(settings: IGrecaleSDKSettings) {
    this.settings = settings;
    this.client = axios.create({ baseURL: settings.CORECARD_URL });
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
      const payload = {
        key: this.settings.CORECARD_AUTH_KEY,
        secret: this.settings.CORECARD_AUTH_SECRET,
      };
      const { data } = await this.client.post<SDKAuthResDTO>(
        "/autenticacao/token-jwt",
        payload,
        requestOptions(),
      );

      return data.token;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
