import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class EvaluationResult extends Evaluation{
  private _evaluation: Evaluation;
  constructor(evaluation: Evaluation, score: number, teacher: Teacher, type: string){
    super(score, teacher, type)
    this._evaluation = evaluation;

  }
  get evaluation(): Evaluation {
    return this._evaluation;
  }
  set evaluation(newValue: Evaluation) {
    this._evaluation = newValue;
  }
  get score(): number {
    return this.score;
  }
  set score(newValue: number) {
    if(newValue<0){
      throw new Error('Score must be greater than 0');
    }
    if(this._type==='prova' && newValue>25){
      throw new Error('Score must be less than 25');
    }
    if(this._type==='trabalho' && newValue>50){
      throw new Error('Score must be less than 50');
    }
    this.score = newValue;
  }
}