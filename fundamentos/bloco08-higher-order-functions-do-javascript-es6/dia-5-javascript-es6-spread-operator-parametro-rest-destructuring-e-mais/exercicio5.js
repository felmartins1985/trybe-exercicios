// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
const arrayThree=[1,2,3]
const [um,dois,tres]=arrayThree
console.log(um);
console.log(dois);
console.log(tres);
function swap([a,b,c]){
  return  [c,b,a];
}
console.log(swap([um,dois,tres]))

// 'const myList = [1, 2, 3];

// const swap = ([a, b, c]) => [c, b, a];
// console.log(swap(myList));'