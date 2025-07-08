import axios, { AxiosInstance } from "axios";

import { SDKError } from "@src/shared/error";
import { SDKAuthResDTO, SDKParams } from "./types/common";

import { logger, requestOptions } from "./utils";
import { APICrypt } from "./apis/crypt";

import { APIPortador } from "./apis/card-holders";
import { APITransaction } from "./apis/transactions";
import { APICartao } from "./apis/cards";

export class SDKClient {
  private params: SDKParams;
  private client: AxiosInstance;

  public crypto: APICrypt;
  public portador: APIPortador;
  public cartao: APICartao;
  public transactions: APITransaction;

  constructor(params: SDKParams) {
    this.params = params;
    this.client = axios.create({ baseURL: params.baseURL });
    this.crypto = new APICrypt(this.client);
    this.portador = new APIPortador(this.client);
    this.cartao = new APICartao(this.client, this.crypto);
    this.transactions = new APITransaction(this.client);
  }

  public async authenticate() {
    try {
      const { data } = await this.client.post<SDKAuthResDTO>(
        "/autenticacao/token-jwt",
        this.params.credentials,
        requestOptions(),
      );

      return data.token;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  // --- SHARED --- //
}
