
abstract class Animal3 {
  constructor(public name: string) { }
  abstract move(): void // perceba que a funcao esta abstrata.
//
}
class Bird3 extends Animal3 {
  move() { 
    console.log(`${this.name} está voando.`); }
}
class Mammal3 extends Animal3 {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish3 extends Animal3 {
  move() { console.log(`${this.name} está nadando.`); }
}
const f = new Fish3('Tubarão');
const g = new Bird3('Papagaio');
const h = new Mammal3('Tatu');
const myMove3 = (animal: Animal3) => {
  animal.move();
}
myMove3(f);
myMove3(g);
myMove3(h);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/