import axios, { AxiosInstance } from "axios";

import { SDKError } from "@src/shared/error";
import { SDKParams, SDKRequestOptions } from "./types";
import keys from "./keys.json";

export class SDKClient {
  public name = "GRECALE";
  public params: SDKParams;
  public client: AxiosInstance;

  constructor(params: SDKParams) {
    this.params = params;
    this.client = axios.create({ baseURL: params.baseURL });
  }

  public async authenticate() {
    try {
      const { data } = await this.client.post(
        "/autenticacao/token-jwt",
        this.params.credentials,
        this.options(),
      );
      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }

  private options(options?: SDKRequestOptions) {
    return {
      headers: {
        "Fastpays-Request-Id": options.requestId ?? randomUUID(),
        Authorization: `Bearer ${options.token}`,
      },
    };
  }
}

(async () => {
  const client = new SDKClient({
    baseURL: "https://apis-uat.fastpays.com.br/api",
    credentials: keys["produto-50"],
  });

  const t = await client.authenticate();
})();
