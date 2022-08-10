// controllers/CepController.js

const rescue = require('express-rescue');
const service = require('../services/CepService');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
  const newCep = await service.create(req.body);

  if (newCep.error) {
    // Iniciamos o fluxo de erro
    return next(newCep.error);
  }
  // if(newCep===error){
  //   return next(newCep);
  // }
  
  res.status(201).json(newCep);
});

module.exports = {
  findAddressByCep,
  create,
};