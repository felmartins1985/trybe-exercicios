const Service= require('../services/CepService');
const CEP_REGEX = /^\d{5}-?\d{3}$/;
const validateCep= (cep)=>{
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
const verifyCep = ({ cep, logradouro, bairro, localidade, uf })=>{ // 409 201
  const existingCep= Service.findAdressByCep(cep);
  if(existingCep){
    return {
      code: 409,
      message: 'CEP já existe'
    }
  }
  return {};
}
module.exports={
  validateCep,
  verifyCep,
}
