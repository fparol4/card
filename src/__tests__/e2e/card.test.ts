import {
  IBCCCardBrand,
  IBCCCardDTO,
  IBCCCardHolderType,
  IBCCCardStatus,
  IBCCCardType,
} from "@bankeiro/bankeiro-backend-corecard";

import { getTestingSDK } from "../__utils__/get-sdk";
import { accountDTOMock } from "../__mocks__/account.mock";

const sdk = getTestingSDK();
const logger = console;
const T_MEM = {} as {
  vCc: IBCCCardDTO;
  pCc: IBCCCardDTO;
  [key: string]: any;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
beforeEach(async () => {
  await sleep(1000);
});

describe("CardService::create", () => {
  it("Should CREATE new card (VIRTUAL) with success", async () => {
    const cc = await sdk.card.create({
      account: accountDTOMock,
      brand: IBCCCardBrand.VISA,
      type: IBCCCardType.VIRTUAL,
      holder: {
        type: IBCCCardHolderType.HOLDER,
        name: "Card Holder One",
      },
    });
    T_MEM.vCc = cc;
    logger.log("1. Created card (VIRTUAL) ->", { cc });
    expect(cc).toBeDefined();
  });

  it("Should CREATE new card (PHYSICAL) with success", async () => {
    const cc = await sdk.card.create({
      account: accountDTOMock,
      brand: IBCCCardBrand.VISA,
      type: IBCCCardType.PHYSICAL,
      holder: {
        type: IBCCCardHolderType.HOLDER,
        name: "Card Holder One",
      },
    });
    T_MEM.pCc = cc;
    logger.log("2. Created card (PHYSICAL) ->", { cc });
    expect(cc).toBeDefined();
  });
});

describe("CardService::get", () => {
  it("Should GET-ONE card", async () => {
    const cc = await sdk.card.getOne({
      account: accountDTOMock,
      card: {
        idCorecard: T_MEM.vCc.idCorecard,
      },
    });
    logger.log("2.1 GET-ONE ->", { cc });
    expect(cc).toBeDefined();
  });

  it("Should GET-ONE (SENSITIVE) card", async () => {
    const cc = await sdk.card.getOne({
      account: accountDTOMock,
      card: {
        idCorecard: T_MEM.vCc.idCorecard,
        withSensitive: true,
      },
    });
    logger.warn("2.2 GET-ONE (SENSIBLE) ->", { cc });
    expect(cc).toBeDefined();
  });

  it("Should GET-ALL cards", async () => {
    const ccs = await sdk.card.getAll({
      account: accountDTOMock,
      cards: [T_MEM.vCc, T_MEM.pCc],
    });
    logger.log("2.3 GET-ALL ->", { ccs });
    expect(ccs).toBeDefined();
  });
});

describe("CardService::cancel", () => {
  it("Should (LOCK) one card", async () => {
    const cc = await sdk.card.changeStatus({
      card: T_MEM.vCc,
      newStatus: IBCCCardStatus.BLOCKED,
      reason: "Q.A",
    });
    logger.log("3.1 Card locked");
    expect(cc).toBeDefined();
  });
});

describe("CardService::unlock", () => {
  it("Should (UNLOCK) one card", async () => {
    const cc = await sdk.card.changeStatus({
      card: T_MEM.vCc,
      newStatus: IBCCCardStatus.ACTIVE,
      reason: "Q.A",
    });
    logger.log("3.2 Card unlocked");
    expect(cc).toBeDefined();
  });
});

describe("CardService::cancel", () => {
  it("Should (CANCEL) one card", async () => {
    const cc = await sdk.card.changeStatus({
      card: T_MEM.vCc,
      newStatus: IBCCCardStatus.CANCELED,
      reason: "Q.A",
    });
    logger.log("3.3 Card unlocked");
    expect(cc).toBeDefined();
  });
});
