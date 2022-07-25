const readline = require('readline-sync');
const sorteio= () => {
const numero= Math.floor(Math.random()*10);
const pergunta= readline.questionInt("Informe um número de 0 a 10:  ");
if(pergunta===numero){
  console.log('Você ganhou!');
} else{
  console.log(`Desculpe, você perdeu! O numero sorteado foi ${numero}`);
}
const repetir= readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ');
if(repetir==='s'){
  sorteio();
} else{
  console.log('Perdeu seu tempo!')
}
}
sorteio();

