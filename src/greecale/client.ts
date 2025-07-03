import axios, { AxiosInstance } from "axios";

import { SDKError } from "@src/shared/error";
import { SDKAuthResDTO, SDKParams } from "./types";

import { logger, requestOptions } from "./utils";
import { APICrypt } from "./apis/crypt";

import keys from "./misc/keys.json";
import { newPortadorDTO } from "./misc/portador";
import { APIPortador } from "./apis/portador";

export class SDKClient {
  public params: SDKParams;
  public client: AxiosInstance;
  public crypto: APICrypt;
  public portador: APIPortador;

  constructor(params: SDKParams) {
    this.params = params;
    this.client = axios.create({ baseURL: params.baseURL });
    this.crypto = new APICrypt(this.client);
    this.portador = new APIPortador(this.client);
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
