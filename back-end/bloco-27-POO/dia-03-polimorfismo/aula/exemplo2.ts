class Animal1 {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird1 extends Animal1 {
  move() {
    super.move();// Chamada ao método move da classe pai. Ao fazer isso, nao preciso criar
// outra funcao que retorna a mesma coisa
    console.log(`${this.name} está voando.`);// esse e outro retorno
  }
}
class Mammal1 extends Animal1 {
  move() { console.log(`${this.name} está andando.`); }
}

const c = new Animal1('Tubarão');
const d = new Bird1('Papagaio');
const e = new Mammal1('Tatu');

const myMove1 = (animal: Animal1) => {
  animal.move();
}
myMove1(c);
myMove1(d);
myMove1(e);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/