
const Cep = require('../models/CepModel');
const Joi = require('joi');
const CEP_REGEX = /^\d{5}-?\d{3}$/;

const returnMessage = (code, message) => ({ error: {
    code,
    message,
  } });

const cepIsValid = (cep) => CEP_REGEX.test(cep);

const findAddressByCep = async (searchedCep) => {
  if (!cepIsValid(searchedCep)) {
    return returnMessage('invalidData', 'CEP inválido');
  }

  const cep = await Cep.findAddressByCep(searchedCep);

  if (!cep) {
    return returnMessage('notFound', 'CEP não encontrado');
  }

  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrar
  const existingCep = await Cep.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return {error: {code:'invalidData',message:error.details[0].message}};

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create,
};