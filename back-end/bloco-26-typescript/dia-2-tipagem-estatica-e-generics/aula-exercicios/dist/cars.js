"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, doors, color) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.brand = brand;
        this.doors = doors;
        this.color = color;
    }
    honk() {
        console.log(`o carro está buzinando.`);
    }
    openTheDoor(door) {
        console.log(`o carro está abrindo a porta ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`o carro está fechando a porta ${door}.`);
    }
    turnOn() {
        console.log(`carro está ligado.`);
    }
    turnOff() {
        console.log(`carro está desligado.`);
    }
    speedUp() {
        console.log(`o carro está acelerando.`);
    }
    speedDown() {
        console.log(`o carro está desacelerando.`);
    }
    stop() {
        console.log(`o carro está parado.`);
    }
    turn(directions) {
        console.log(`o carro esta virando a ${directions}.`);
    }
}
exports.default = Car;
