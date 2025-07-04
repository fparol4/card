import { AxiosInstance } from "axios";
import { APICrypt } from "./crypt";
import { SDKRequestOptions } from "../types/common";
import { SDKError } from "@src/shared/error";
import { removeAttributes, requestOptions } from "../utils";

import {
  GrecaleCardSensitiveDTO,
  GreecaleCardDTO,
} from "../types/cartao.types";

export class APICartao {
  constructor(
    public client: AxiosInstance,
    public crypto: APICrypt,
  ) {
    this.crypto = new APICrypt(client);
  }

  public async getByProxy(
    proxy: string,
    withSensitive?: boolean,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data: card } = await this.client.get(
        `/cartao/proxy/${proxy}`,
        requestOptions(options),
      );

      if (withSensitive) {
        const cardWithSensitive = this._getSensitive(card, options);
        return cardWithSensitive;
      }

      return this._toDTO(card);
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

  private _toDTO(payload: GrecaleCardSensitiveDTO): GreecaleCardDTO {
    const toRemove = ["cartao", "cvc2", "dataVencimento"];
    const cardWithoutSensitive = removeAttributes(payload, toRemove);
    return cardWithoutSensitive;
  }
}
