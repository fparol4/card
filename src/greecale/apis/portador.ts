import { AxiosInstance } from "axios";
import { SDKRequestOptions } from "../types/common";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";

import {
  IAddPortadorDTO,
  IPortadorDTO,
  IUpdatePortadorDTO,
} from "../types/portador.types";

export class APIPortador {
  constructor(private client: AxiosInstance) {}

  public async getByProxy(proxy: string, options?: SDKRequestOptions) {
    try {
      const { data } = await this.client.get<IPortadorDTO>(
        `/portador/proxy/${proxy}`,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Portador > getById", error);
    }
  }

  public async addPortador(
    payload: IAddPortadorDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAddPortadorDTO>(
        `/portador`,
        payload,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Portador > getById", error);
    }
  }

  public async updateByProxy(
    proxy: string,
    payload: IUpdatePortadorDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<void>(
        `/portador/proxy/${proxy}`,
        payload,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Portador > getById", error);
    }
  }
}
