const doMath=(a,b,c)=>{
  return new Promise((resolve,reject)=>{
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject('Informe apenas números');
    }
  const resultado= (a+b)*c;
  if (resultado>50){
    resolve(resultado);
  } else{
    reject(Error('Valor muito baixo'));
  }  })
}
//
const getRandomNumber=()=> {
  const a= Math.floor(Math.random() * 100 + 1);
  const b= Math.floor(Math.random() * 100 + 1);
  const c= Math.floor(Math.random() * 100 + 1);
  const random=[a,b,c];
  return random;
}
//
// doMath(...getRandomNumber())
// .then(resultado=> console.log(resultado))
// .catch(err=> console.log(err.message));
// doMath(...getRandomNumber())
// .then(resultado=> console.log(resultado))
// .catch(err=> console.log(err));

async function main(){
  try{
    await doMath(...getRandomNumber());
    console.log('Deu tudo certo')
  }
  catch(err){
    console.error(err)
  }
}
main();