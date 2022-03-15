// escreva sum abaixo
//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum (...arr){
  return arr.reduce((acc,currentValue)=> acc + currentValue)
}
//tenho que colocar o reduce para ir somando um a uma
//se fose apenas a + b nao daria certo porque nao esses parametros definidos
console.log(sum(1,3,5,6));