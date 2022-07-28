const numero=(number)=>{
  if(number>0){
    return 'positivo';
  } else if(number<0){
    return 'negativo';
  }
  if(typeof number!=='number'){
    return 'o valor deve ser um numero'
  }
return 'neutro';
}
module.exports=numero;
