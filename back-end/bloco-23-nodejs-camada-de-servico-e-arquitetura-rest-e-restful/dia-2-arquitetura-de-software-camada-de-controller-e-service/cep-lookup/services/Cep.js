// CepService.js
const Model = require('../models/CepModel');
// Nossa camada de service agora só precisa do CEP para cadastrar
const create = async (cep) => {
  // testamos o REGEX de nosso CEP
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  // Verificamos se o CEP já foi cadastrado. Aqui, podemos usar a mesma função que tínhamos antes.
  const existingCep = await Model.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  const createdCep = await Model.create(cep);

  // Caso recebamos null, é porque o CEP não foi encontrado pela API
 if (!createdCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não existe',
      },
    };
  }
  
  return createdCep;
};

module.exports = create;