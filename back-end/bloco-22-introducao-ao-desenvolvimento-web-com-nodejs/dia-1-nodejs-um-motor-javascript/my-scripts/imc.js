const readline=require('readline-sync');
// const peso=75;
// const altura=1.78;

// const calcularImc=(peso,altura)=>{
//   const imc=peso/(altura*altura);
//   console.log(`O seu IMC é: ${imc.toFixed(2)}`);
// }

const main=()=>{
  const peso=readline.questionFloat('Informe seu peso em quilos: ');
  const altura=readline.questionFloat('Informe sua altura em metros: ');
  const imc=peso/(altura*altura);
  console.log(`O seu IMC é: ${imc.toFixed(2)}`);
  if(imc<18.5){
    console.log('Abaixo do peso');
  } else if(imc<25){
    console.log('Peso normal');
  } else if(imc<30){
    console.log('Acima do peso');
  } else if(imc<35){
    console.log('Obesidade I');
  } else if(imc<40){
    console.log('Obesidade II');
  }else(
    console.log('Obesidade III ou IV')
  )
}

main();
