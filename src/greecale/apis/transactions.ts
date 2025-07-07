import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { SDKRequestOptions } from "../types/common";

import { SDKRequestOptions,} from "../types/common"
import {
  ITransferByProxyDTO,
  ITransferByCardDTO,
  ITransferResDTO,
  IEstornoDTO,
  IEstornoResDTO,
  IEstornoCartaoDTO,
  IDescargaPrePagoProxyDTO,
  IDescargaPrePagoProxyResDTO,
  ICargaProxyDTO,
  ICargaProxyResDTO,
  ICargaCartaoDTO,
  ICargaCartaoResDTO,
  IAutorizacaoProxyDTO,
  IAutorizacaoProxyResDTO,
  IAutorizacaoParceladaProxyDTO,
  IAutorizacaoParceladaProxyResDTO,
  IAutorizacaoCartaoDTO,
  IAutorizacaoCartaoResDTO,
  ITransacaoPorProxyResDTO,
  ITransacaoMultiSaldoPorProxyResDTO,
  ITransacaoMultiSaldoPorCartaoResDTO,
  ITransacaoPorCartaoResDTO,
} from "../types/transaction.types";

export class APITransaction {
  constructor(public client: AxiosInstance) {}

  // --- TRANSFERÊNCIAS --- //

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

   // Descarga pré-paga por proxy
   public async unloadPrepaidByProxy(
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

  // Carga por proxy
  public async loadByProxy(
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

  // Carga por cartão
  public async loadByCard(
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

  // Autorização por proxy
  public async authorizeByProxy(
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

  // Autorização parcelada por proxy
  public async authorizeInstallmentsByProxy(
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

  // Autorização por cartão
  public async authorizeByCard(
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

      const { data } = await this.client.get<ITransacaoPorProxyResDTO[]>(
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
        ITransacaoMultiSaldoPorProxyResDTO[]
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
        ITransacaoMultiSaldoPorCartaoResDTO[]
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