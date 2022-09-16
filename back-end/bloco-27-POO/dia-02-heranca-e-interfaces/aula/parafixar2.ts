interface MyInterFace{
  myNumber: number;
  myFunc(myParam:number): string;
}

class MyClass implements MyInterFace{
  constructor(
    public myNumber: number,
  ){}
  myFunc(myParam: number): string {
      return `myNumber somado ao myParam= ${this.myNumber + myParam}`;
  }
}
const myClass= new MyClass(3);
console.log(myClass.myFunc(5))
