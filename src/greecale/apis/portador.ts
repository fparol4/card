import { AxiosInstance } from "axios";
import {
  INewPortadorDTO,
  INewPortadorResDTO,
  SDKRequestOptions,
} from "../types";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";

export class APIPortador {
  constructor(public client: AxiosInstance) {}

  public async getById(id: string, options?: SDKRequestOptions) {
    try {
      const { data } = await this.client.get(
        `/portador/proxy/${id}`,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Portador > getById", error);
    }
  }

  public async add(payload: INewPortadorDTO, options?: SDKRequestOptions) {
    try {
      const { data } = await this.client.post<INewPortadorResDTO>(
        `/portador`,
        payload,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Portador > getById", error);
    }
  }
}
