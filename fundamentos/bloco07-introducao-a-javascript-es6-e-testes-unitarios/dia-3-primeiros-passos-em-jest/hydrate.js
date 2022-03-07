const hydrate = (bebidas) => {
  const divBebidas = bebidas.split('');
  // console.log(divBebidas);
  let coposAgua = 0;
  for (let index = 0; index < divBebidas.length; index += 1) {
    const parsedCaracter = parseInt(divBebidas[index]);
    console.log(parsedCaracter);
    if (parsedCaracter) {
      coposAgua = coposAgua + parsedCaracter;
    }
  }
  let copos='copo';
  if (coposAgua >1){
    copos='copos';
  }
  return `${coposAgua} ${copos} de água`;
}
console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));
module.exports=hydrate;