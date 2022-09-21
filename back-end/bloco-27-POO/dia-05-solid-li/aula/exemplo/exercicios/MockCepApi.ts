import ICep from './Cep';
export default class MockCepApi implements ICep {
  async getAddressByCep(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço mock"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP mock"`;
  }
}