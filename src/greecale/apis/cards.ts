import { AxiosInstance } from "axios";
import { CryptApi } from "./crypt";
import { SDKRequestOptions } from "../types/common";
import { SDKError } from "@src/shared/error";
import { logger, removeAttributes, requestOptions } from "../utils";

import { GrecaleCardSensitiveDTO, GreecaleCardDTO } from "../types/card.types";

export class CardApi {
  constructor(
    private client: AxiosInstance,
    private crypto: CryptApi,
  ) {
    this.crypto = new CryptApi(client);
  }

  public async getByProxy(proxy: string, options?: SDKRequestOptions) {
    try {
      const { data: card } = await this.client.get(
        `/cartao/proxy/${proxy}`,
        requestOptions(options),
      );

      return this._getSensitive(card, options);
    } catch (error) {
      throw new SDKError("get card by proxy > error", error);
    }
  }

  private async _getSensitive(
    card: GrecaleCardSensitiveDTO,
    options?: SDKRequestOptions,
  ) {
    return {
      ...card,
      cartao: await this.crypto.decrypt(card.cartao, options),
      dataVencimento: await this.crypto.decrypt(card.dataVencimento, options),
      cvc2: await this.crypto.decrypt(card.cvc2, options),
    };
  }
}
