import { GrecaleSDK } from "@src/corecards/sdk";

import { logger } from "@src/greecale/utils";
import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";
import {
  IBCCCardBrand,
  IBCCCardHolderType,
  IBCCCardType,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/enum";
import type { IBCCCreateCardDTO } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/dtos/create";

const input = {
  cpf: "40628606001",
};

test("Add card for AccountType.PF", async () => {
  const sdk = new GrecaleSDK(settings);

  const payload: IBCCCreateCardDTO = {
    account: { ...mocks.accountPF, cpf: input.cpf },
    brand: IBCCCardBrand.VISA,
    holder: {
      type: IBCCCardHolderType.HOLDER,
      name: "TESTE-01",
    },
    type: IBCCCardType.PHYSICAL,
  };

  const card = await sdk.card.create(payload);

  logger({ payload, card: JSON.stringify(card) });
  expect(true).toBeTruthy();
});
