const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
import readline from "readline-sync"; 

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsMass.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = unitsMass.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent); // pega o valor passado no parametro e multiplica
  // por 10 elevado ao expoente, que e a diferenca entre os index
}
function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a unidade base:");

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a conversão:");


  const fromUnitChoice = unitsMass[fromUnitChoiceIndex];
  const toUnitChoice = unitsMass[toUnitChoiceIndex];

  const result = convertMass(value, fromUnitChoice, toUnitChoice)

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();