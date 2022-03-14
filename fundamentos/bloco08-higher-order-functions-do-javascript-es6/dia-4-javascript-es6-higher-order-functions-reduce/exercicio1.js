const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme em um array.
function flatten() {
  return arrays.reduce((acc, item) => {
    return acc.concat(item) //tentei com push ou somando e nao deu certo
    //O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
  },[])
}
console.log(flatten())