import { GrecaleSDK } from "@src/corecards/sdk";

import {
  CardBrand,
  CardHolderType,
  CardType,
  ICreateCardDTO,
} from "@src/corecards/types/card.types";

import { accountPFMock } from "./mocks/account.mock";
import { logger } from "@src/greecale/utils";
import { settings } from "./misc/settings";

test("Add card for AccountType.PF", async () => {
  const sdk = new GrecaleSDK(settings);

  const payload: ICreateCardDTO = {
    account: accountPFMock,
    brand: CardBrand.VISA,
    holder: {
      type: CardHolderType.HOLDER,
      name: "TESTE-01",
    },
    type: CardType.PHYSICAL,
  };

  const card = await sdk.card.create(payload);

  logger({ payload });
  expect(1).toBe(1);
});
