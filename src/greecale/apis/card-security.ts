import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";
import {
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
  ICreateRandomPasswordByProxyResponse
} from "../types/card-security.types";

export class CardSecurityApi {
  constructor(public client: AxiosInstance) {}

  // Obter CVV por proxy
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

  // Validar CVV por proxy
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

  // Obter senha por proxy
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

  // Atualizar senha por proxy
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

  // Criar senha por proxy
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

  // Validar senha por proxy
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

  // Criar senha aleatória por proxy
  public async createRandomPasswordByProxy(
    params: ICreateRandomPasswordByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<ICreateRandomPasswordByProxyResponse> {
    try {
      const { data } = await this.client.post<ICreateRandomPasswordByProxyResponse>(
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
