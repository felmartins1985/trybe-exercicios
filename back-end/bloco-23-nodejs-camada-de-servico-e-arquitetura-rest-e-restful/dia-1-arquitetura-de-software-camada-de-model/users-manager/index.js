const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User= require('./models/User');
app.use(bodyParser.json());
const rescue = require('express-rescue');
// Definimos a porta
const PORT = 3000;
//
const createUser= require('./middlewares/createUser');
const updatedUser = require('./middlewares/updateUser');
// 1
app.post('/user',createUser.verifyFirstName,createUser.verifyLastName,
createUser.verifyEmail, createUser.verifyPassword,
rescue (async (req,res)=>{
  const{firstName,lastName,email,password}=req.body;
  // if(!firstName || !lastName || !email || !password){
  //   return res.status(400).json({message: 'Dados inválidos'});
  // }
  const newUser= await User.create({firstName,lastName,email,password});
  return res.status(200).json(newUser);
}))
// 2
app.get('/user', rescue(async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json({users});
}))
// 3
app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if(!user){
    return res.status(400).json({message: 'Usuário not found'});
  }
  return res.status(200).json({user});
}))
// 4
app.put('/user/:id',updatedUser.verifyFirstName,updatedUser.verifyLastName,
updatedUser.verifyEmail,
updatedUser.verifyPassword,
rescue(async (req, res) => {
  const {id}=req.params;
  const {firstName,lastName,email,password}=req.body;
  const updateUser= await User.updateUser(id,{firstName,lastName,email,password});
  if(!updateUser){
    return res.status(400).json({message: 'Usuário nao encontrado'});
  }
  return res.status(200).json({updateUser});
}))
// Iniciamos o servidor
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });