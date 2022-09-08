"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
//
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
//
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
//
function triangle(base, height) {
    return (base * height) / 2;
} //
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
//
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
//
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
//
function trapezio(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezio = trapezio;
function circulo(r) {
    return 3.14 * (r ** 2);
}
exports.circulo = circulo;
;
