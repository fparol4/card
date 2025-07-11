import { AxiosInstance } from "axios";
import { CryptApi } from "./crypt";
import { SDKRequestOptions } from "../types/common";
import { SDKError } from "@src/shared/error";
import { logger, removeAttributes, requestOptions } from "../utils";

import {
  GrecaleCardSensitiveDTO,
  GreecaleCardDTO,
  IUpdateCardStatusByProxyDTO,
  IUpdateCardStatusByProxyResponse
} from "../types/card.types";
import { CardStatus } from "@src/corecards/types/card.types";

// Mapeamento correto dos valores do enum CardStatus para os códigos da API
export const GrecaleStatus = {
  [CardStatus.CREATING]: 1,
  [CardStatus.ACTIVE]: 22,
  [CardStatus.CANCELED]: 67,
  [CardStatus.BLOCKED]: 65,
} as const;

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

  public async updateStatusByProxy(
    proxy: string,
    newStatus: CardStatus,
    options?: SDKRequestOptions,
  ): Promise<boolean> {
    try {
      const codStatus = GrecaleStatus[newStatus];
      if (!codStatus) {
        throw new Error(`Status não mapeado: ${newStatus}`);
      }

      await this.client.put<IUpdateCardStatusByProxyResponse>(
        `/cartao/proxy/${proxy}/status`,
        { codStatus: String(codStatus) }, // Enviar como string
        requestOptions(options),
      );

      return true;
    } catch (error) {
      const errObj = error as any;
      if (errObj && errObj.response && errObj.response.data) {
        console.log(errObj.response.data);
      } else {
        console.log(error);
      }
      throw new SDKError("change card status > error", error);
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
