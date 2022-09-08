"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
const readline_sync_1 = __importDefault(require("readline-sync"));
function convertVolume(value, fromUnit, toUnit) {
    const fromIndex = unitsVolume.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitsVolume.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(1000, exponent); // pega o valor passado no parametro e multiplica
    // por 10 elevado ao expoente, que e a diferenca entre os index
}
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsVolume, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsVolume, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsVolume[fromUnitChoiceIndex];
    const toUnitChoice = unitsVolume[toUnitChoiceIndex];
    const result = convertVolume(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
