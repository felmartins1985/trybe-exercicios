// ./CepService.ts
import ICep from './Cep';
class CepService {
  private readonly cepApi: ICep;

  constructor(cepApi: ICep) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCep(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;