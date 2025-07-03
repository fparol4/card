import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import {
  ITransferByProxyDTO,
  SDKRequestOptions,
  ITransferByCardDTO,
  ITransferResDTO,
  IEstornoResDTO,
  IEstornoDTO,
  IEstornoCartaoDTO,
  IDescargaPrePagoProxyResDTO,
  IDescargaPrePagoProxyDTO,
  ICargaProxyResDTO,
  ICargaProxyDTO,
  ICargaCartaoResDTO,
  ICargaCartaoDTO,
  IAutorizacaoProxyResDTO,
  IAutorizacaoProxyDTO,
  IAutorizacaoParceladaProxyResDTO,
  IAutorizacaoParceladaProxyDTO,
  IAutorizacaoCartaoDTO,
  IAutorizacaoCartaoResDTO,
  ITransacaoPorProxyResDTO,
  ITransacaoMultiSaldoPorProxyResDTO,
  ITransacaoMultiSaldoPorCartaoResDTO,
  ITransacaoPorCartaoResDTO,
} from "../types";

export class APITransaction {
  constructor(public client: AxiosInstance) {}

  // --- TRANSFERÊNCIAS --- //

  public async transferByProxy(
    payload: ITransferByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<any>(
        `/transacoes/transfere/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async transferByCard(
    payload: ITransferByCardDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ITransferResDTO>(
        `/transacoes/transfere/cartao/${payload.numeroCartao}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // --- ESTORNOS --- //

  public async refundMultiBalance(
    payload: IEstornoDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IEstornoResDTO>(
        `/transacoes/multisaldo/estorno/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async refundMultiBalanceByCard(
    payload: IEstornoCartaoDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IEstornoResDTO>(
        `/transacoes/multisaldo/estorno/cartao/${payload.numeroCartao}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // --- CARGA / DESCARGA --- //

  public async descargaPrePagoByProxy(
    payload: IDescargaPrePagoProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IDescargaPrePagoProxyResDTO>(
        `/transacoes/descarga/pre-pago/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async cargaByProxy(
    payload: ICargaProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ICargaProxyResDTO>(
        `/transacoes/carga/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async cargaByCartao(
    payload: ICargaCartaoDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ICargaCartaoResDTO>(
        `/transacoes/carga/cartao/${payload.numeroCartao}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // --- AUTORIZAÇÕES --- //

  public async autorizacaoByProxy(
    payload: IAutorizacaoProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAutorizacaoProxyResDTO>(
        `/transacoes/autorizacao/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async autorizacaoParceladaByProxy(
    payload: IAutorizacaoParceladaProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAutorizacaoParceladaProxyResDTO>(
        `/transacoes/autorizacao/parcelada/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async autorizacaoByCartao(
    payload: IAutorizacaoCartaoDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAutorizacaoCartaoResDTO>(
        `/transacoes/autorizacao/cartao/${payload.numeroCartao}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // --- CONSULTA DE TRANSAÇÕES --- //

  public async getTransacoesPorProxy(
    params: {
      proxy: string;
      dataInicio: string;
      dataFim: string;
      pagina?: string;
    },
    options?: SDKRequestOptions,
  ) {
    try {
      const query = new URLSearchParams({
        dataInicio: params.dataInicio,
        dataFim: params.dataFim,
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();

      const { data } = await this.client.get<ITransacaoPorProxyResDTO[]>(
        `/transacoes/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getTransacoesMultiSaldoPorProxy(
    params: {
      proxy: string;
      dataInicio?: string;
      dataFim?: string;
    },
    options?: SDKRequestOptions,
  ) {
    try {
      const query = new URLSearchParams({
        ...(params.dataInicio ? { dataInicio: params.dataInicio } : {}),
        ...(params.dataFim ? { dataFim: params.dataFim } : {}),
      }).toString();

      const { data } = await this.client.get<ITransacaoMultiSaldoPorProxyResDTO[]>(
        `/transacoes/multi-saldo/proxy/${params.proxy}${query ? `?${query}` : ""}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getTransacoesMultiSaldoPorCartao(
    params: {
      numeroCartao: string;
      dataInicio?: string;
      dataFim?: string;
    },
    options?: SDKRequestOptions,
  ) {
    try {
      const query = new URLSearchParams({
        ...(params.dataInicio ? { dataInicio: params.dataInicio } : {}),
        ...(params.dataFim ? { dataFim: params.dataFim } : {}),
      }).toString();

      const { data } = await this.client.get<ITransacaoMultiSaldoPorCartaoResDTO[]>(
        `/transacoes/multi-saldo/cartao/${params.numeroCartao}${query ? `?${query}` : ""}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async getTransacoesPorCartao(
    params: {
      numeroCartao: string;
      dataInicio: string;
      dataFim: string;
      pagina?: string;
    },
    options?: SDKRequestOptions,
  ) {
    try {
      const query = new URLSearchParams({
        dataInicio: params.dataInicio,
        dataFim: params.dataFim,
        ...(params.pagina ? { pagina: params.pagina } : {}),
      }).toString();

      const { data } = await this.client.get<ITransacaoPorCartaoResDTO[]>(
        `/transacoes/cartao/${params.numeroCartao}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
