import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";
import {
  IObterCVVPorProxyParams,
  IObterCVVPorProxyResDTO,
  IValidarCVVPorProxyParams,
  IValidarCVVPorProxyBody,
  IValidarCVVPorProxyResDTO,
  IObterSenhaPorProxyParams,
  IObterSenhaPorProxyResDTO,
  IAtualizarSenhaPorProxyParams,
  IAtualizarSenhaPorProxyBody,
  IAtualizarSenhaPorProxyResDTO,
  ICriarSenhaPorProxyParams,
  ICriarSenhaPorProxyBody,
  ICriarSenhaPorProxyResDTO,
  IValidarSenhaPorProxyParams,
  IValidarSenhaPorProxyBody,
  IValidarSenhaPorProxyResDTO,
  ICriarSenhaAleatoriaPorProxyParams,
  ICriarSenhaAleatoriaPorProxyResDTO
} from "../types/segurancaCartoes.types";

export class APISegurancaCartao {
  constructor(public client: AxiosInstance) {}

  // Obter CVV por proxy
  public async getCVVByProxy(
    params: IObterCVVPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IObterCVVPorProxyResDTO> {
    try {
      const { data } = await this.client.get<IObterCVVPorProxyResDTO>(
        `/proxy/${params.proxy}/cvv`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Validar CVV por proxy
  public async validateCVVByProxy(
    params: IValidarCVVPorProxyParams,
    body: IValidarCVVPorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IValidarCVVPorProxyResDTO> {
    try {
      const { data } = await this.client.post<IValidarCVVPorProxyResDTO>(
        `/proxy/${params.proxy}/cvv/validar`,
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
    params: IObterSenhaPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IObterSenhaPorProxyResDTO> {
    try {
      const { data } = await this.client.get<IObterSenhaPorProxyResDTO>(
        `/proxy/${params.proxy}/senha`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Atualizar senha por proxy
  public async updatePasswordByProxy(
    params: IAtualizarSenhaPorProxyParams,
    body: IAtualizarSenhaPorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IAtualizarSenhaPorProxyResDTO> {
    try {
      const { data } = await this.client.put<IAtualizarSenhaPorProxyResDTO>(
        `/proxy/${params.proxy}/senha`,
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
    params: ICriarSenhaPorProxyParams,
    body: ICriarSenhaPorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<ICriarSenhaPorProxyResDTO> {
    try {
      const { data } = await this.client.post<ICriarSenhaPorProxyResDTO>(
        `/proxy/${params.proxy}/senha`,
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
    params: IValidarSenhaPorProxyParams,
    body: IValidarSenhaPorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IValidarSenhaPorProxyResDTO> {
    try {
      const { data } = await this.client.post<IValidarSenhaPorProxyResDTO>(
        `/proxy/${params.proxy}/senha/validar`,
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
    params: ICriarSenhaAleatoriaPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<ICriarSenhaAleatoriaPorProxyResDTO> {
    try {
      const { data } = await this.client.post<ICriarSenhaAleatoriaPorProxyResDTO>(
        `/proxy/${params.proxy}/senha/random`,
        {},
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
