import Enrollable from "./Enrollable";
import Person from "../exercicio1";

export default class Employee extends Person implements Enrollable{
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, salary: number){
    super (name, birthDate);
    this._admissionDate= new Date();
    this._enrollment = this.generateEnrollment();
    this._salary = salary;
  }
  generateEnrollment(): string { // retorna uma string única gerada como matrícula aleatória
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
  get enrollment(){
    return this._enrollment;
  }
  set enrollment(newValue: string){
    if (newValue.length<16){
      throw new Error('A matrícula deve ter no mínimo 16 caracteres');
    }
    this._enrollment = newValue;
  }
  get salary(){
    return this._salary;
  }
  set salary(newValue: number){
    if(newValue<0){
      throw new Error('O salário não pode ser negativo');
    }
  }
  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
   this._admissionDate = value;
  }

}