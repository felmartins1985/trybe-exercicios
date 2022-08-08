const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    // Caso o produto não exista no banco, utilizamos o status code 404 para indicar
    // que o recurso não foi encontrado e padronize o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  if (name === undefined || brand === undefined) {
    // Caso os dados do produto não sejam informados na requisição, utilize o
    // status code 400 para indicar que a requisição não foi feita corretamente
    // e padronize o retorno para json.
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }
  const newProduct = await ProductModel.add(name, brand);

  res.status(200).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    // Caso o produto não exista no banco, utilize o status code 404 para indicar
    // que o recurso não foi encontrado e padronize o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  await ProductModel.exclude(req.params.id);
  res.status(204).json(product);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  if (name === undefined || brand === undefined) {
    // Caso os dados do produto não sejam informados na requisição, utilize o
    // status code 400 para indicar que a requisição não foi feita corretamente
    // e padronizamos o retorno para json.
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }
  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    // Caso o produto não exista no banco, utilizamos o status code 404 para indicar
    // que o recurso não foi encontrado e padronizamos o retorno para json.
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ name, brand });
});

module.exports = router;