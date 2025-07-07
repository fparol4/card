import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";
import {
  IObterLimitePorProxyParams,
  IObterLimitePorProxyResDTO,
  IAtualizarLimitePorProxyParams,
  IAtualizarLimitePorProxyBody,
  IAtualizarLimitePorProxyResDTO
} from "../types/limites.types";

export class APILimites {
  constructor(public client: AxiosInstance) {}

  // Obter limite por proxy
  public async getLimitByProxy(
    params: IObterLimitePorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IObterLimitePorProxyResDTO> {
    try {
      const { data } = await this.client.get<IObterLimitePorProxyResDTO>(
        `/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Atualizar limite por proxy
  public async updateLimitByProxy(
    params: IAtualizarLimitePorProxyParams,
    body: IAtualizarLimitePorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IAtualizarLimitePorProxyResDTO> {
    try {
      const { data } = await this.client.put<IAtualizarLimitePorProxyResDTO>(
        `/proxy/${params.proxy}`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
