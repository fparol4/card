import type { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import type { SDKRequestOptions } from "../types/common";
import type {
  IGetLimitByProxyParams,
  IGetLimitByProxyResponse,
  IUpdateLimitByProxyParams,
  IUpdateLimitByProxyBody,
  IUpdateLimitByProxyResponse,
} from "../types/limit.types";

export class LimitsApi {
  constructor(public client: AxiosInstance) {}

  public async getLimitByProxy(
    params: IGetLimitByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetLimitByProxyResponse> {
    try {
      const { data } = await this.client.get<IGetLimitByProxyResponse>(
        `/limite/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async updateLimitByProxy(
    params: IUpdateLimitByProxyParams,
    body: IUpdateLimitByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IUpdateLimitByProxyResponse> {
    try {
      const { data } = await this.client.put<IUpdateLimitByProxyResponse>(
        `/limite/proxy/${params.proxy}`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
