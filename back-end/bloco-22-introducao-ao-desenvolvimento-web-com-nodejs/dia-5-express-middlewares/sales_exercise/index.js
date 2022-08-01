const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const authMiddleware = require('./middlewares/authMiddleware');
const crypto = require('crypto');
const rescue = require('express-rescue');

app.use(bodyParser.json());

app.post('/sales', rescue(authMiddleware),validateProductName,validateInfo,(req, res) => {
 
  res.status(200).json({ message:'Tudo funcionando'})
})

app.post('/signup', rescue(function(req,res){
  const {email,password,firstName,phone} = req.body;
  if(email===undefined || password===undefined || firstName===undefined || phone===undefined){
    res.status(401).json({message:'Dados incompletos'});
  }
  const token=crypto.randomBytes(8).toString('hex');
  res.status(200).json({"token": `${token}`});
}));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})