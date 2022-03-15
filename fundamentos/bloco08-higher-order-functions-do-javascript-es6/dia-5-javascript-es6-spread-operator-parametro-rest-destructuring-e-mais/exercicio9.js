const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
//yearSeasons é um objeto, entao tenho que denominar uma variavel para cada chave-valor
const {spring, summer, autumn, winter}=yearSeasons
const allSeasons =[...autumn,...winter,...spring,...summer]
console.log(allSeasons);