import { GrecaleSDK } from "@src/corecards/sdk";
import { settings } from "./misc/settings";

import {
  CardBrand,
  CardHolderType,
  CardType,
  ICreateCardDTO,
} from "@src/corecards/types/card.types";

import { accountPFMock } from "./mocks/account.mock";
import { logger } from "@src/greecale/utils";

test("Should create a new card", () => {
  const sdk = new GrecaleSDK(settings);

  const payload: ICreateCardDTO = {
    account: accountPFMock,
    brand: CardBrand["VISA"],
    holder: {
      type: CardHolderType.HOLDER,
      name: "TESTE-01",
    },
    type: CardType.PHYSICAL,
  };

  logger({ payload });
});
