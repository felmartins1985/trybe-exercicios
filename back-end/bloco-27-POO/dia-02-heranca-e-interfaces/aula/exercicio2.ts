import Person1 from './exercicio1';

class Estudante extends Person1{
  private _matricula: string|number;
  private _notas: number[];
  private _trabalho: number[]=[];
  constructor(name2:string, birthDate: Date, notas: number[]=[]){
    super(name2, birthDate)
    this._notas=notas;
    this._matricula = this.generateEnrollment();
  }
  get matricula(): string|number {
    return this._matricula;
  }
  set matricula(newMatricula: string|number){
    if(typeof newMatricula !== "string"){
      throw new Error('Matricula incorreta.');;
    }
    this._matricula = newMatricula;
  }
  get notas(): number[]{ return this._notas; }
  set notas(newNotas:number[]){
    if(newNotas.length<4){
      throw new Error('Número de notas inválido.');
    }
    this._notas = newNotas;
  }
  get trabalho(): number[]{ return this._trabalho; }
  set trabalho(newTrabalho:number[]){
    if(newTrabalho.length<2){
      throw new Error('Número de trabalhos inválido.');
    }
    this._trabalho = newTrabalho;
  }
  somaNotas(): number{
    const soma = this._notas.reduce((a,b) => a+b,0);
    return soma;
  }
  mediaNotas(): number{
    const media = this.somaNotas()/this._notas.length;
    return media;
  }
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}
const estudante1= new Estudante('João', new Date('1985/06/17'));
const estudante2= new Estudante('Maria', new Date('1994/08/28'));
estudante1.name='Felipe'
estudante1.notas=[1, 2, 3,4]
// estudante1.matricula=1234;
console.log(estudante1)
// console.log(estudante1.somaNotas());
// console.log(estudante1.mediaNotas());
// console.log(estudante2.somaNotas());
// console.log(estudante2.mediaNotas())