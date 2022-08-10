const cepMiddleware=require('../middleware/CepMiddleware');
const Service=require('../services/CepService');
const express = require('express');
const router = express.Router();

router.post('/', cepMiddleware.verifyCepMiddleware,async (req, res)=>{
  const {cep, logradouro, bairro, localidade, uf}=req.body;
  console.log(req.body, 'simbora');
  const cepCreate= await Service.create({cep, logradouro, bairro, localidade, uf});
  return res.status(201).json(cepCreate);
})

router.get('/:cep', cepMiddleware.validateCepMiddleware,async (req, res)=>{
  const {cep}= req.params;
  const cepGet= await Service.findAdressByCep(cep);
  return res.status(200).json(cepGet);
})

module.exports={
  router,
}