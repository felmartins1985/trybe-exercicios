function calcNumeros() {
  const promise = new Promise((resolve, reject) => {
    const num1= Math.floor(Math.random() * 100 + 1);
    const num2= Math.floor(Math.random() * 100 + 1);
    const num3= Math.floor(Math.random() * 100 + 1);
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas numeros'))
    }
    const resultado= (num1+num2)*num3;
    if(resultado<50) reject(new Error('Valor muito baixo'));    
    resolve(resultado)
  });

  return promise;
}

const main = async () => {
  try{
    const soma= await calcNumeros();
    console.log(`O calculo dos tres numeros foi: ${soma}`);
  } catch(error){
    console.log(error.message)
  }
}
main();

