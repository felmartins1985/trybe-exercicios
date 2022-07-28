const readline = require('readline-sync');
const calcImc = () => {
  const peso= readline.questionInt("Qual o seu peso em quilos? ")
  const altura= readline.questionFloat("Qual a sua altura em metros? ")
  const resultado= peso/(altura*altura);
  return resultado;
}
const main=()=>{
 const imc=(calcImc(75,1.78));
 if(imc<18.5){
  console.log('Magro');
 } else if(imc<24.9){
  console.log('Normal');
 } else if(imc<29.9){
  console.log('Gudinho');
 } else if(imc <34.9){
  console.log('Obeso');
 } else{
  console.log('Obeso morbido');
 }
 }

main();
module.exports=main;
