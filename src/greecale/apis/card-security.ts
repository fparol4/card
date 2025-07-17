import type { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import type { SDKRequestOptions } from "../types/common";
import type {
  IGetCvvByProxyParams,
  IGetCvvByProxyResponse,
  IValidateCvvByProxyParams,
  IValidateCvvByProxyBody,
  IValidateCvvByProxyResponse,
  IGetPasswordByProxyParams,
  IGetPasswordByProxyResponse,
  IUpdatePasswordByProxyParams,
  IUpdatePasswordByProxyBody,
  IUpdatePasswordByProxyResponse,
  ICreatePasswordByProxyParams,
  ICreatePasswordByProxyBody,
  ICreatePasswordByProxyResponse,
  IValidatePasswordByProxyParams,
  IValidatePasswordByProxyBody,
  IValidatePasswordByProxyResponse,
  ICreateRandomPasswordByProxyParams,
  ICreateRandomPasswordByProxyResponse,
} from "../types/card-security.types";

export class CardSecurityApi {
  constructor(public client: AxiosInstance) {}

  public async getCVVByProxy(
    params: IGetCvvByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetCvvByProxyResponse> {
    try {
      const { data } = await this.client.get<IGetCvvByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/cvv`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async validateCVVByProxy(
    params: IValidateCvvByProxyParams,
    body: IValidateCvvByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IValidateCvvByProxyResponse> {
    try {
      const { data } = await this.client.post<IValidateCvvByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/cvv/validar`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getPasswordByProxy(
    params: IGetPasswordByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetPasswordByProxyResponse> {
    try {
      const { data } = await this.client.get<IGetPasswordByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/senha`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async updatePasswordByProxy(
    params: IUpdatePasswordByProxyParams,
    body: IUpdatePasswordByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IUpdatePasswordByProxyResponse> {
    try {
      const { data } = await this.client.put<IUpdatePasswordByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/senha`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async createPasswordByProxy(
    params: ICreatePasswordByProxyParams,
    body: ICreatePasswordByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<ICreatePasswordByProxyResponse> {
    try {
      const { data } = await this.client.post<ICreatePasswordByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/senha`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async validatePasswordByProxy(
    params: IValidatePasswordByProxyParams,
    body: IValidatePasswordByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IValidatePasswordByProxyResponse> {
    try {
      const { data } = await this.client.post<IValidatePasswordByProxyResponse>(
        `/seguranca/cartao/proxy/${params.proxy}/senha/validar`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async createRandomPasswordByProxy(
    params: ICreateRandomPasswordByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<ICreateRandomPasswordByProxyResponse> {
    try {
      const { data } =
        await this.client.post<ICreateRandomPasswordByProxyResponse>(
          `/seguranca/cartao/proxy/${params.proxy}/senha/random`,
          {},
          requestOptions(options),
        );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
