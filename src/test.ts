import { SDKClient } from "./greecale/client";
import { logger } from "./greecale/utils";

import keys from "./greecale/misc/keys.json";
import { newPortadorDTO } from "./greecale/misc/portador";

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
