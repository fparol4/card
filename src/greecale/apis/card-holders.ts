import { AxiosInstance } from "axios";
import { SDKRequestOptions } from "../types/common";
import { logger, requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";

import {
  ICardHolderDTO,
  IAddCardHolderDTO,
  IUpdateCardHolderDTO,
  IAddCardHolderResDTO,
} from "../types/card-holder.types";

export class CardHoldersApi {
  constructor(public client: AxiosInstance) {}

  public async addCardHolder(
    payload: IAddCardHolderDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAddCardHolderResDTO>(
        `/portador`,
        payload,
        requestOptions(options),
      );

      return data;
    } catch (error: any) {
      logger({ data: error.response.data });
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getByProxy(proxy: string, options?: SDKRequestOptions) {
    try {
      const { data } = await this.client.get<ICardHolderDTO>(
        `/portador/proxy/${proxy}`,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async updateByProxy(
    proxy: string,
    payload: IUpdateCardHolderDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.put<IUpdateCardHolderDTO>(
        `/portador/proxy/${proxy}`,
        payload,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
