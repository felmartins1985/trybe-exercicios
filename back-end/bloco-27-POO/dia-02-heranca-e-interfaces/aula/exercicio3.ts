interface Funcionaria{
  registro: string;
  salario: number;
  admissao: Date;
  gerarRegistro(): string;
}
/////////////////////////////////
class Disciplina{
  private _nomeDisciplina: string;
  constructor(nomeDisciplina: string){
    this._nomeDisciplina = nomeDisciplina;
  }
  get nomeDisciplina(): string { return  this._nomeDisciplina};
  set nomeDisciplina(nomeDisciplina: string){
    if(nomeDisciplina.length<3){
      throw new Error('Nome da disciplina inválido.');
    }
    this._nomeDisciplina = nomeDisciplina;
  }
}
const math = new Disciplina('Matemática');
const history = new Disciplina('História');
const philosophy = new Disciplina('Filosofia');

console.log(math);
console.log(history);
console.log(philosophy);
///////////////////////////////////

import Person1 from './exercicio1';

class Professor extends Person1 implements Funcionaria{
  private _materia: Disciplina;
  private _registro= String();
  private _salario:number;
  private _admissao: Date;
  constructor(_name2:string, _birthDate2: Date, salario: number, materia:Disciplina ){
    super(_name2,_birthDate2)// nao importa o nome dado, mas tem que ser colocado na ordem
  // que o super espero e na tipagem certa
    this._materia = materia;
    this._registro = this.gerarRegistro();
    this._salario = salario;
    this._admissao = new Date();
  }
  get materia(): Disciplina { return this._materia; }
  set materia(newValue: Disciplina) { this._materia = newValue; }
  get registro(): string { return this._registro; }
  set registro(newValue:string){
    if (newValue.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    this._registro = newValue;
  }
  get salario(): number { return this._salario; }
  set salario(newValue: number){
    if(newValue<0){
      throw new Error('O salário não pode ser negativo.');
    }
    this._salario = newValue;
  }
  get admissao(): Date {
    return this._admissao;
  }
  set admissao(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissao = value;
  }


  gerarRegistro(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }
}
const marta = new Professor('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Professor('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Professor('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);
