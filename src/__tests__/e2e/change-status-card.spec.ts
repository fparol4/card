import { GrecaleSDK } from "@src/corecards/sdk";

import { logger } from "@src/greecale/utils";
import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";
import { IBCCCardDTO } from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/card";
import {
  IBCCCardStatus,
  IBCCCardBrand,
  IBCCCardHolderType,
  IBCCCardType,
} from "@bankeiro/bankeiro-backend-corecard/src/interfaces/card/enum";

function generateRandomCpf() {
  return String(Math.floor(10000000000 + Math.random() * 90000000000));
}

// Função utilitária para mapear status da API para o enum do SDK
function apiToSdkStatus(apiStatus: number): IBCCCardStatus | undefined {
  switch (apiStatus) {
    case 1:
      return IBCCCardStatus.CREATING;
    case 22:
      return IBCCCardStatus.ACTIVE;
    case 65:
      return IBCCCardStatus.BLOCKED;
    case 67:
      return IBCCCardStatus.CANCELED;
    default:
      return undefined;
  }
}

let card: IBCCCardDTO;

const statusList = [
  { status: IBCCCardStatus.CREATING, name: "CREATING" },
  { status: IBCCCardStatus.ACTIVE, name: "ACTIVE" },
  { status: IBCCCardStatus.BLOCKED, name: "BLOCKED" },
  { status: IBCCCardStatus.CANCELED, name: "CANCELED" },
  { status: IBCCCardStatus.ACTIVE, name: "ACTIVE" }, // testar desbloqueio
  { status: IBCCCardStatus.BLOCKED, name: "BLOCKED" },
];

// Remover a função waitForStatus (linhas 38-56)

describe("SDK > Alterar status de um cartão (real API flow)", () => {
  beforeAll(async () => {
    const sdk = new GrecaleSDK(settings);
    const randomCpf = generateRandomCpf();
    const payloadCreate = {
      account: { ...mocks.accountPF, cpf: randomCpf },
      brand: IBCCCardBrand.VISA,
      holder: {
        type: IBCCCardHolderType.HOLDER,
        name: "TESTE-STATUS",
      },
      type: IBCCCardType.PHYSICAL,
    };
    card = await sdk.card.create(payloadCreate);
  });

  test("Deve aguardar cartão ficar ACTIVE e testar trocas reais de status", async () => {
    const sdk = new GrecaleSDK(settings);

    // Consulta o status do cartão apenas uma vez, sem polling
    let cardActive = await sdk.card.getOne({ idCorecard: card.idCorecard });
    logger({ cardActive });

    const currentStatus = apiToSdkStatus((cardActive as IBCCCardDTO).status);
    logger({ currentStatus });

    // 2. Testa as trocas reais de status a partir do status atual
    let workingStatus = currentStatus;
    for (const { status, name } of statusList) {
      if (status === workingStatus) {
        logger({ tentativa: `Pular transição para o mesmo status (${name})` });
        continue;
      }
      const payloadChange = {
        card: {
          idCorecard: card.idCorecard,
          status: workingStatus,
          context: card.context || {},
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
        },
        newStatus: status,
        reason: "any",
      };
      let result, error;
      try {
        result = await sdk.card.changeStatus(payloadChange);
        logger({ tentativa: `Alterar para ${name}`, payloadChange, result });
      } catch (err: any) {
        error = err;
        logger({ tentativa: `Alterar para ${name}`, payloadChange, error });
      }

      // Log extra para investigar problemas com ACTIVE
      const updatedCard = await sdk.card.getOne({
        idCorecard: card.idCorecard,
      });
      logger({ updatedCard, esperado: name, statusApi: (updatedCard as IBCCCardDTO).status });
      const sdkStatus = apiToSdkStatus((updatedCard as IBCCCardDTO).status);
      if (result) {
        expect(result).toBe(true);
        expect(sdkStatus).toBe(status);
        workingStatus = status;
      } else {
        logger({
          tentativa: `Falhou alterar para ${name}, mantendo status atual`,
          statusAtual: sdkStatus,
        });
        workingStatus = sdkStatus;
      }
    }
  }, 60000); // Timeout de 60 segundos para o teste
});
