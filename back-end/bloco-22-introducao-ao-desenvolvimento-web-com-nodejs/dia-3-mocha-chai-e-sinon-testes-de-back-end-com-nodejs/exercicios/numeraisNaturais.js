const checkNumbers = (number) => {
  if(number>0) return 'positivo';
  if(number<0) return 'negativo';
  if(typeof number!=='number') return 'o valor deve ser um numero';
  return 'neutro';
}
module.exports=checkNumbers;