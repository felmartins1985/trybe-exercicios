export default  class Person{
  private _name: string;
  private _birthDate: Date;
  constructor(name: string, birthDate: Date){
    this._name = name;
    this._birthDate = birthDate;
  }
  get name(){
    return this._name;
  }
  get birthDate(){
    return this._birthDate;
  }
  set name(newName: string){
    if(newName.length<3){
      throw new Error('Name must have at least 3 characters');
    }
    this._name = newName;
  }
  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }
  static getAge(value: Date): number { // transforma a data em idade
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }
  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }

}