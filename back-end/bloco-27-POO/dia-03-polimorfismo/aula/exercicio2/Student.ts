import Enrollable from "./Enrollable";
import EvaluationResult from './EvalutionResult';
import Person from "../exercicio1";
import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Student extends Person implements Enrollable{
  private _enrollment: string;
  // private _examsGrades: number[] = [];
  // private _worksGrades: number[] = [];
  private _evaluationsResults: EvaluationResult[];
  constructor (name: string, birthDate: Date){
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }
  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  // get examsGrades(){
  //   return this._examsGrades;
  // }
  // set examsGrades(newValue: number[]){
  //   if(newValue.length>4){
  //     throw new Error('A nota de exame deve ter no maximo 4 valores');
  //   }
  //   this._examsGrades = newValue;
  // }
  // get worksGrades(){
  //   return this._worksGrades;
  // }
  // set worksGrades(newValue: number[]){
  //   if (newValue.length > 2) {
  //     throw new Error('A nota de trabalho deve ter no maximo 2 valores');
  //   }
  //   this._worksGrades = newValue;
  // }
  get enrollment(){
    return this._enrollment;
  }
  set enrollment(newValue: string){
    if (newValue.length<16){
      throw new Error('A matrícula deve ter no mínimo 16 caracteres');
    }
    this._enrollment = newValue;
  }
  sumGrades(): number{
    const sumTotal= [...this._evaluationsResults]
    .reduce((previousNote, note) => note.score + previousNote, 0);;
    return sumTotal;
  }
  sumAverage(): number{
    const sumTotal= this.sumGrades();
    return sumTotal/this._evaluationsResults.length;
  }
  generateEnrollment(): string { // retorna uma string única gerada como matrícula aleatória
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `STU${randomStr}`;
  }
  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}
 const std1= new Student('João', new Date('1990-01-01'));
 const teacher= new Teacher('Felipe', new Date('1985/06/17'), 4000, 'Geografia' );
 const ev1= new Evaluation(10, teacher, 'prova');
 const er1= new EvaluationResult(ev1, 10, teacher, 'prova');
 std1.addEvaluationResult(er1);
 console.log(std1);