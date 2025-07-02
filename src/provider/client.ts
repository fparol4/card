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

(async () => {
  const client = new SDKClient({
    baseURL: "https://apis-uat.fastpays.com.br/api",
    credentials: keys["produto-50"],
  });

  const token = await client.authenticate();
  const options = { token };
  logger({ token });

  // --- crypto ---
  // const aesKey = await client.crypto.getAESKey(options);
  // logger({ aesKey });

  // const toEncrupt = "5540542841359729";
  // const encrypted = await client.crypto.encrypt(toEncrupt, options);
  // logger({ encrypted });

  // const encrypted = "5CD2F824502B11CEED5B235ADE2EB8FF";
  // const decrypted = await client.crypto.decrypt(encrypted, options);
  // logger({ decrypted });

  // --- portador (card-holder) ---
  newPortadorDTO.cpf = "24406570004";
  const novo_portador = await client.portador.add(newPortadorDTO, options);
  logger({ novo_portador });

  // const portador = await client.portador.getById("1014500000226001", options);
  // logger({ portador });
})();
