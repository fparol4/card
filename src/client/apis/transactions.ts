import type { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import type { SDKRequestOptions } from "../types/common";

import {
  type ITransferByProxyDTO,
  type ITransferByCardDTO,
  type ITransferByProxyResponse,
  type ITransferByCardResponse,
  type IRefundDTO,
  type IRefundResponse,
  type IRefundByCardDTO,
  IRefundByCardResponse,
  type IUnloadPrepaidByProxyDTO,
  type IUnloadPrepaidByProxyResponse,
  IUnloadPrepaidByCardDTO,
  type IUnloadPrepaidByCardResponse,
  type ILoadByProxyDTO,
  type ILoadByProxyResponse,
  type ILoadByCardDTO,
  type ILoadByCardResponse,
  type IAuthorizationByProxyDTO,
  type IAuthorizationByProxyResponse,
  type IInstallmentAuthorizationByProxyDTO,
  type IInstallmentAuthorizationByProxyResponse,
  type IAuthorizationByCardDTO,
  type IAuthorizationByCardResponse,
  type ITransactionByProxyResponse,
  type IMultiBalanceTransactionByProxyResponse,
  type IMultiBalanceTransactionByCardResponse,
  type ITransactionByCardResponse
} from "../types/transaction.types";

export class TransactionsApi {
  constructor(public client: AxiosInstance) {}

  // --- TRANSFERÊNCIAS --- //

  public async transferByProxy(
    payload: ITransferByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ITransferByProxyResponse>(
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
      const { data } = await this.client.post<ITransferByCardResponse>(
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
    payload: IRefundDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IRefundResponse>(
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
    payload: IRefundByCardDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IRefundResponse>(
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

  public async unloadPrepaidByProxy(
    payload: IUnloadPrepaidByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IUnloadPrepaidByProxyResponse>(
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
    payload: ILoadByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IUnloadPrepaidByCardResponse>(
        `/transacoes/descarga/pre-pago/cartao/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async loadByProxy(
    payload: ILoadByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ILoadByProxyResponse>(
        `/transacoes/carga/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  public async loadByCard(
    payload: ILoadByCardDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<ILoadByCardResponse>(
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

  // Autorização por proxy
  public async authorizeByProxy(
    payload: IAuthorizationByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAuthorizationByProxyResponse>(
        `/transacoes/autorizacao/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Autorização parcelada por proxy
  public async authorizeInstallmentsByProxy(
    payload: IInstallmentAuthorizationByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IInstallmentAuthorizationByProxyResponse>(
        `/transacoes/autorizacao/parcelada/proxy/${payload.proxy}`,
        payload.body,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Autorização por cartão
  public async authorizeByCard(
    payload: IAuthorizationByCardDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<IAuthorizationByCardResponse>(
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

  // Obter transações por proxy
  public async getTransactionsByProxy(
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

      const { data } = await this.client.get<ITransactionByProxyResponse[]>(
        `/transacoes/proxy/${params.proxy}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Obter transações multi-saldo por proxy
  public async getMultiBalanceTransactionsByProxy(
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

      const { data } = await this.client.get<
        IMultiBalanceTransactionByProxyResponse[]
      >(
        `/transacoes/multi-saldo/proxy/${params.proxy}${query ? `?${query}` : ""}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Obter transações multi-saldo por cartão
  public async getMultiBalanceTransactionsByCard(
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

      const { data } = await this.client.get<
        IMultiBalanceTransactionByCardResponse[]
      >(
        `/transacoes/multi-saldo/cartao/${params.numeroCartao}${query ? `?${query}` : ""}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // Obter transações por cartão
  public async getTransactionsByCard(
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

      const { data } = await this.client.get<ITransactionByCardResponse[]>(
        `/transacoes/cartao/${params.numeroCartao}?${query}`,
        requestOptions(options),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}