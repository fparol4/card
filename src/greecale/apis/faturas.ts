import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";
import {
  IExtratoPorProxyParams,
  IExtratoPorProxyResDTO,
  IFaturasAbertasPorProxyParams,
  IFaturasAbertasPorProxyResDTO,
  IFaturasFechadasPorProxyParams,
  IFaturasFechadasPorProxyResDTO,
  IDetalheFaturaPorProxyParams,
  IDetalheFaturaPorProxyResDTO,
  IAtualizarVencimentoPorProxyParams,
  IAtualizarVencimentoPorProxyBody,
  IAtualizarVencimentoPorProxyResDTO
} from "../types/faturas.types";

export class APIFaturas {
  constructor(public client: AxiosInstance) {}

  // Extrato por proxy
  public async getStatementByProxy(
    params: IExtratoPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IExtratoPorProxyResDTO[]> {
    try {
      const query = new URLSearchParams({
        dataInicio: params.dataInicio,
        dataFim: params.dataFim,
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();
      const { data } = await this.client.get<IExtratoPorProxyResDTO[]>(
        `/extrato/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Faturas abertas por proxy
  public async getOpenInvoicesByProxy(
    params: IFaturasAbertasPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IFaturasAbertasPorProxyResDTO> {
    try {
      const { data } = await this.client.get<IFaturasAbertasPorProxyResDTO>(
        `/abertas/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Faturas fechadas por proxy
  public async getClosedInvoicesByProxy(
    params: IFaturasFechadasPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IFaturasFechadasPorProxyResDTO> {
    try {
      const { data } = await this.client.get<IFaturasFechadasPorProxyResDTO>(
        `/fechadas/proxy/${params.proxy}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Detalhe da fatura por proxy
  public async getInvoiceDetailsByProxy(
    params: IDetalheFaturaPorProxyParams,
    options?: SDKRequestOptions,
  ): Promise<IDetalheFaturaPorProxyResDTO[]> {
    try {
      const query = new URLSearchParams({
        periodo: params.periodo.toString(),
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();
      const { data } = await this.client.get<IDetalheFaturaPorProxyResDTO[]>(
        `/detalhe/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Atualizar vencimento por proxy
  public async updateDueDateByProxy(
    params: IAtualizarVencimentoPorProxyParams,
    body: IAtualizarVencimentoPorProxyBody,
    options?: SDKRequestOptions,
  ): Promise<IAtualizarVencimentoPorProxyResDTO> {
    try {
      const { data } = await this.client.put<IAtualizarVencimentoPorProxyResDTO>(
        `/vencimento/proxy/${params.proxy}`,
        body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
