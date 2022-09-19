import Teacher from "./Teacher";
export default class Evaluation{
  protected _score: number;
  protected _teacher: Teacher;
  protected _type: string;
  constructor(score: number, teacher: Teacher, type: string){
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }
  get teacher(): Teacher {
    return this._teacher;
  }
  set teacher(newValue: Teacher) {
    this._teacher = newValue;
  }
  get score(): number {
    return this._score;
  }
  set score(newValue: number) {
    if(newValue<0){
      throw new Error('Score must be greater than 0');
    }
    if (this._type==='prova' && newValue>25){
      throw new Error('Score must be less than 25');
    }
    if(this._type==='trabalho' && newValue>50){
      throw new Error('Score must be less than 50');
    }
    this._score = newValue;
  }
  get type(): string {
    return this._type;
  }
  set type(newValue: string) {
    // if(!['prova', 'trabalho'].includes(newValue)){
    //   throw new Error('Type must be prova or trabalho');
    // }
    if(newValue!=='prova' && newValue!=='trabalho'){
      throw new Error('Type must be prova or trabalho');
    }
    this._type = newValue;
  }

}