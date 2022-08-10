const Service= require('../services/CepService');
const CEP_REGEX = /^\d{5}-?\d{3}$/;
const validateFindCep= (cep)=>{
  if(!CEP_REGEX.test(cep)){
    return {
      code: 400,
      message: 'CEP inválido'
    }
  }
  if(!cep){
    return {
      code: 404,
      message: 'CEP não encontrado'
    }
  }
  return {};  
}
const verifyCreateCep = async (cep)=>{
  const existingCep= await Service.findAdressByCep(cep);
  // console.log(existingCep,"schema");
  if(existingCep){
    return {
      code: 409,
      message: 'CEP já existe'
    }
  }
  return existingCep;
}
module.exports={
  validateFindCep,
  verifyCreateCep,
}
