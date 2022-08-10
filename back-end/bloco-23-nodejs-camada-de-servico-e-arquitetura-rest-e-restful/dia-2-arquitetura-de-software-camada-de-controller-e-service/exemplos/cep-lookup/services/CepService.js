const Model = require('../models/CepModel');


const findAdressByCep = async (cep) => {
  const cepData= await Model.findAddressByCep(cep);
  return cepData;
}
//
const create= async({ cep, logradouro, bairro, localidade, uf })=>{
  const createCep= await Model.create({ cep, logradouro, bairro,
     localidade, uf });
  return createCep;
}
//
module.exports = {
  findAdressByCep,
  create,
}