import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";
import {
  IGetStatementByProxyParams,
  IGetStatementByProxyResponse,
  IGetOpenInvoicesByProxyParams,
  IGetOpenInvoicesByProxyResponse,
  IGetClosedInvoicesByProxyParams,
  IGetClosedInvoicesByProxyResponse,
  IGetInvoiceDetailByProxyParams,
  IGetInvoiceDetailByProxyResponse,
  IUpdateDueDateByProxyParams,
  IUpdateDueDateByProxyBody,
  IUpdateDueDateByProxyResponse,
} from "../types/invoice.types";

export class InvoicesApi {
  constructor(public client: AxiosInstance) {}

  public async getStatementByProxy(
    params: IGetStatementByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetStatementByProxyResponse[]> {
    try {
      const query = new URLSearchParams({
        dataInicio: params.dataInicio,
        dataFim: params.dataFim,
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();
      const { data } = await this.client.get<IGetStatementByProxyResponse[]>(
        `/faturas/extrato/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getOpenInvoicesByProxy(
    params: IGetOpenInvoicesByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetOpenInvoicesByProxyResponse> {
    try {
      const { data } = await this.client.get<IGetOpenInvoicesByProxyResponse>(
        `/faturas/abertas/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getClosedInvoicesByProxy(
    params: IGetClosedInvoicesByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetClosedInvoicesByProxyResponse> {
    try {
      const { data } = await this.client.get<IGetClosedInvoicesByProxyResponse>(
        `/faturas/fechadas/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getInvoiceDetailsByProxy(
    params: IGetInvoiceDetailByProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IGetInvoiceDetailByProxyResponse[]> {
    try {
      const query = new URLSearchParams({
        periodo: params.periodo.toString(),
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();
      const { data } = await this.client.get<
        IGetInvoiceDetailByProxyResponse[]
      >(
        `/faturas/detalhe/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async updateDueDateByProxy(
    params: IUpdateDueDateByProxyParams,
    body: IUpdateDueDateByProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IUpdateDueDateByProxyResponse> {
    try {
      const { data } = await this.client.put<IUpdateDueDateByProxyResponse>(
        `/faturas/vencimento/proxy/${params.proxy}`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
