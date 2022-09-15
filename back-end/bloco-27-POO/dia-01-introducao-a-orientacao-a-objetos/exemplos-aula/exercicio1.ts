class Estudante{
  private _matricula: string|number;
  private _nome: string;
  private _notas: number[];
  private _trabalho: number[];
  constructor(matricula: string, nome: string, notas: number[], trabalho: number[]){
    this._matricula =matricula;
    this._nome = nome;
    this._notas =notas;
    this._trabalho = trabalho;
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
  get nome(){
    return this._nome;
  }
  set nome(newNome:string){
    if(newNome.length<3){
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._nome=newNome;
  }

  somaNotas(): number{
    const soma = this._notas.reduce((a,b) => a+b,0);
    return soma;
  }
  mediaNotas(): number{
    const media = this.somaNotas()/this._notas.length;
    return media;
  }
}
const estudante1= new Estudante('123','João',[10,5,10],[4,10]);
const estudante2= new Estudante('456','Maria',[1,5,9],[4,8]);
estudante1.nome='Felipe'
// estudante1.matricula=1234;
console.log(estudante1.nome);
console.log(estudante1.matricula);
console.log(estudante1.somaNotas());
console.log(estudante1.mediaNotas());
console.log(estudante2.somaNotas());
console.log(estudante2.mediaNotas())