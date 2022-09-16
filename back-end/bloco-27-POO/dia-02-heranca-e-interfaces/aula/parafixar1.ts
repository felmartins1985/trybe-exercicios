class SuperClass{
  public isSuper: boolean;
  constructor(){
    this.isSuper = true; //defino como padrao
  }
  sayHello(): void{
    console.log('Hello World!');
  }
}

class SubClass extends SuperClass{
  constructor(){
    super(); //<-- a gente utilizava essa extensao sem super antes
    this.isSuper =false;
  }
  sayHello2(): void {
      this.sayHello();  
    }
}
const myfunc= (classe: SuperClass)=>{
  // classe.sayHello2();// da certo porque o sayHello2 e publico
  classe.sayHello();
  console.log(classe.isSuper ? 'Super!' : 'Sub!');
}

const superClass1= new SuperClass();
const subClass1= new SubClass();
console.log(myfunc(superClass1));
console.log(myfunc(subClass1));
