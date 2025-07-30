import axios, { type AxiosInstance } from "axios";

import { requestOptions } from "./utils";
import { CardHoldersApi } from "./apis/card-holders";
import { CardApi } from "./apis/cards";
import { CryptApi } from "./apis/crypt";
import { SDKError } from "@src/shared/error";
import type { SDKAuthResDTO } from "./types/common";
import type { IGrecaleSDKSettings } from "@src/corecard/sdk";

export class GrecaleClient {
  private client: AxiosInstance;
  public settings: IGrecaleSDKSettings;

  public cards: CardApi;
  public cardHolders: CardHoldersApi;
  public cryptApi: CryptApi;

  constructor(settings: IGrecaleSDKSettings) {
    this.settings = settings;
    this.client = axios.create({ baseURL: settings.CORECARD_URL });
    this.cryptApi = new CryptApi(this.client);
    this.cards = new CardApi(this.client, this.cryptApi);
    this.cardHolders = new CardHoldersApi(this.client);
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
