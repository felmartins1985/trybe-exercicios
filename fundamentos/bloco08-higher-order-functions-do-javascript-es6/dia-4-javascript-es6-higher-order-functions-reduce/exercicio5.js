const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acc, item) => {
    return acc + item.split('').reduce((acc, item) => { //o split só funciona aqui por cada elemento do array é uma string
      if (item === 'a' || item === 'A') {
        return acc + 1;
      } else {
        return acc;
      }
    },0)
  },0)
};

console.log(containsA())