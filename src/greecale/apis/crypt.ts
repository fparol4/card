import crypto from "crypto";
import { AxiosInstance } from "axios";
import { AESKey, CRIPT_ALGORITHM, SDKRequestOptions } from "../types/common";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";

export class APICrypt {
  constructor(public client: AxiosInstance) {}

  public async getAESKey(options?: SDKRequestOptions): Promise<AESKey> {
    try {
      const { data } = await this.client.post(
        "/consumer/key",
        null,
        requestOptions(options),
      );
      return {
        key: Buffer.from(data.aesKey, "hex"),
        iv: Buffer.from(data.ivParameter, "hex"),
      };
    } catch (error) {
      throw new SDKError("getAESKey", error);
    }
  }

  public async encrypt(content: string, options?: SDKRequestOptions) {
    const { key, iv } = await this.getAESKey(options);
    const cipher = crypto.createCipheriv(CRIPT_ALGORITHM, key, iv);
    cipher.setAutoPadding(false);

    const encrypted = Buffer.concat([cipher.update(content), cipher.final()])
      .toString("hex")
      .toUpperCase();

    return encrypted;
  }

  public async decrypt(content: string, options?: SDKRequestOptions) {
    const { key, iv } = await this.getAESKey(options);
    const decipher = crypto.createDecipheriv(CRIPT_ALGORITHM, key, iv);
    decipher.setAutoPadding(false);
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(content, "hex")),
      decipher.final(),
    ]).toString("utf-8");
    return decrypted;
  }
}
