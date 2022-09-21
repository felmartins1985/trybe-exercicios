export default interface ICep {
  getAddressByCep(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}