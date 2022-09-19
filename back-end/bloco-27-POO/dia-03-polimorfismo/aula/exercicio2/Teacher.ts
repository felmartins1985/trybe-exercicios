import Employee from "./Employee";
export default class Teacher extends Employee{
  private _subject: string;
  constructor(name:string, birthDate: Date, salary: number, subject:string){
    super(name, birthDate, salary);
    this._subject = subject;
  }
  get subject(): string {
    return this._subject;
  }

  set subject(newValue: string) {
    this._subject = newValue;
  }
}
const e1= new Teacher('Felipe', new Date('1985/06/17'), 4000, 'Geografia' )
// console.log(e1);