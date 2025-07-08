import { ICreateCardDTO } from '../types/card.types';
import { IAddCardHolderDTO } from '@src/greecale/types/card-holder.types';

export function createCardDTOToAddCardHolderDTO(params: ICreateCardDTO): IAddCardHolderDTO {
  const { account, holder, type, brand } = params;
  return {
    // Dados pessoais
    nome: holder.name || account.name,
    nomeCompleto: account.name + (account.lastName ? ` ${account.lastName}` : ''),
    sobreNome: account.lastName || '',
    dataNascimento: account.birthDate || '1990-01-01',
    email: account.email,
    estadoCivil: '2', // mock
    nacionalidade: 'BRASILEIRO', // mock
    nomeMae: account.motherName || 'Maria da Silva',
    nomePai: 'José da Silva', // mock
    nomeSocial: holder.name || account.name,
    sexo: account.gender as 'M' | 'F' | 'S',
    telefone: account.contact.phone,
    telefoneComercial: account.contact.phone,
    celular: account.contact.mobile,
    cpf: account.cpf || '00000000000',
    rg: account.rg || '0000000',
    orgaoEmissorRG: account.rgIssuingAuthority || 'SSP',
    estadoEmissorRG: account.rgIssuingState || 'SP',
    // Endereço
    logradouro: account.address.street,
    numero: '123', // mock
    complemento: account.address.complement || '',
    referencia: account.address.reference || '',
    bairro: account.address.neighborhood,
    cidade: account.address.city,
    cep: Number(account.address.zipcode) || 0,
    estado: account.address.state,
    pais: '76', // mock
    // Emprego
    nomeEmpregador: 'Empresa Mock', // mock
    codigoEmpregador: 1, // mock
    matricula: '123456', // mock
    cargo: 'Desenvolvedor', // mock
    dataAdmissao: '20220101', // mock
    salario: 5000, // mock
    // Produto e cartão
    produto: 50, // mock
    tipoCartao: Number(type),
    ga: '1', // mock
    limiteCredito: 0, // mock
    embossadora: '84', // mock
    geraSenhaAtivacao: true, // mock
    codigoEntregadora: 11, // mock
    codigoPlastico: 0, // mock
    codigoVencimentoFatura: 1, // mock
    geraEmbossing: false, // mock
    tipoEnvioFatura: 1, // mock
    tipoPlastico: 0, // mock
    proxy: '0', // mock
    RMC: '0', // mock
    // Banco
    codigoBanco: Number(account.bank.code),
    codigoAgencia: Number(account.bank.agency),
    codigoContaCorrente: account.bank.account,
    digitoContaCorrente: account.bank.digit,
    // Correspondente
    cnpjCorrespondente: '12345678000199', // mock
  };
} 