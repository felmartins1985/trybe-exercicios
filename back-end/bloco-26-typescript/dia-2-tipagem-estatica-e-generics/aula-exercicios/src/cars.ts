import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

class Car {
  brand: string;
  doors: number; 
  color: Colors; 

  constructor(brand: string, doors: number, color: Colors) {
      // usamos o this para acessar as propriedades da instância da classe,
      // ele representa a própria instância que estamos criando
      // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
      this.brand  = brand;
      this.doors  = doors;
      this.color  = color;
  }

  honk(): void {
      console.log(`o carro está buzinando.`);
  }

  openTheDoor(door:Doors): void {
      console.log(`o carro está abrindo a porta ${door}.`)
  }

  closeTheDoor(door:Doors): void {
      console.log(`o carro está fechando a porta ${door}.`)
  }
  turnOn(): void {
    console.log(`carro está ligado.`)
  }
  turnOff(): void {
    console.log(`carro está desligado.`)
  }
  speedUp(): void {
    console.log(`o carro está acelerando.`)
  }
  speedDown(): void {
    console.log(`o carro está desacelerando.`)
  }
  stop(): void {
    console.log(`o carro está parado.`)
  }
  turn(directions: Directions): void {
    console.log(`o carro esta virando a ${directions}.`)
  }
}

export default Car;