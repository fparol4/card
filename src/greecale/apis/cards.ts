import type { AxiosInstance } from "axios";
import { CryptApi } from "./crypt";
import type { SDKRequestOptions } from "../types/common";
import { SDKError } from "@src/shared/error";
import { requestOptions } from "../utils";
import type {
  IGrecaleCardSensitiveDTO,
  IUpdateCardStatusByProxyResponse,
} from "../types/card.types";

import { IBCCCardStatus } from "@bankeiro/bankeiro-backend-corecard";

export const GrecaleStatus = {
  [IBCCCardStatus.CREATING]: 1,
  [IBCCCardStatus.ACTIVE]: 22,
  [IBCCCardStatus.CANCELED]: 67,
  [IBCCCardStatus.BLOCKED]: 65,
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

  public async getById(id: string, options?: SDKRequestOptions) {
    try {
      const { data: card } = await this.client.get(
        `/cartao/${id}`,
        requestOptions(options),
      );

      return this._getSensitive(card, options);
    } catch (error) {
      throw new SDKError("get card by proxy > error", error);
    }
  }

  public async updateStatusByProxy(
    proxy: string,
    newStatus: IBCCCardStatus,
    options?: SDKRequestOptions,
  ): Promise<boolean> {
    try {
      const codStatus = GrecaleStatus[newStatus];
      if (!codStatus) {
        throw new Error(`Status não mapeado: ${newStatus}`);
      }

      await this.client.put<IUpdateCardStatusByProxyResponse>(
        `/cartao/proxy/${proxy}/status`,
        { codStatus: String(codStatus) },
        requestOptions(options),
      );

      return true;
    } catch (error) {
      throw new SDKError("change card status > error", error);
    }
  }

  public async updateStatusById(
    id: string,
    newStatus: IBCCCardStatus,
    options?: SDKRequestOptions,
  ): Promise<boolean> {
    try {
      const codStatus = GrecaleStatus[newStatus];
      if (!codStatus) {
        throw new Error(`Status não mapeado: ${newStatus}`);
      }

      await this.client.put(
        `/cartao/${id}/status`,
        { codStatus: String(codStatus) },
        requestOptions(options),
      );

      return true;
    } catch (error) {
      throw new SDKError("change card status > error", error);
    }
  }

  private async _getSensitive(
    card: IGrecaleCardSensitiveDTO,
    options?: SDKRequestOptions,
  ) {
    return {
      ...card,
      id: card.cartao,
      cartao: await this.crypto.decrypt(card.cartao, options),
      dataVencimento: await this.crypto.decrypt(card.dataVencimento, options),
      cvc2: await this.crypto.decrypt(card.cvc2, options),
    };
  }
}
