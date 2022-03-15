const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
//tenho que lembrar para colocar os valores entre []
//isso se deve porque, ao colocar o nome da variavel no local do array
//a função vai procurar os elementos previstos dentro de cada valor
const toObject= ([modelo, marca, ano])=>{
  return [modelo, marca, ano]
}
console.log(toObject(palio));