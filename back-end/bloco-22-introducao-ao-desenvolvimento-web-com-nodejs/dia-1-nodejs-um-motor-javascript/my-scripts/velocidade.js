const readline=require('readline-sync');
const velocidadeMedia=()=>{
  const distancia=readline.questionInt("Informe a distância em metros: ");
  const tempo=readline.questionInt("Informe o tempo em segundos: ");
  const velocidade=distancia/tempo;
  console.log(`A velocidade média é: ${velocidade.toFixed(2)}`);
}
velocidadeMedia();