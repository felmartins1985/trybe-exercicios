export default class Person1{
  private _name2: string;
  private _birthDate2: Date;
  constructor(name: string, birthDate: Date){
    this._name2 = name;
    this._birthDate2 = birthDate;
  }
  get name(){ return this._name2; }
  set name(newName:string){
    if(newName.length<3){
      throw new Error("Nome inválido");
    }
    this._name2 = newName;
  }
  get birthDate(): Date {
    return this._birthDate2;
  }
  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate2 = value;
  }
  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos 
  //entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }
  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person1.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
const maria = new Person1('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person1('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);