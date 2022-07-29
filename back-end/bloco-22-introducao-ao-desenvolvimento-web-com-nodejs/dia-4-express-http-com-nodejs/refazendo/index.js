const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// Crie uma rota GET /ping
//Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/get', function(req,rest){
  rest.json({message:'pong'})
})
//Crie uma rota POST /hello
//Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
app.post('/hello', function(req,res){
  const {name}=req.body;
  return res.status(200).json({message:`Bem-vindo, ${name}`})
})
//
app.post('/greetings', (req,res)=>{
  const {name, age}= req.body;
  if(age>17) return res.status(200).json({message:`Oi,${name}, você tem ${age} anos e pode entrar`});
  return res.status(404).json({message:`Desculpe, ${name}, você tem ${age} anos e não pode entrar`});
})
//
app.put('/users/:name/:age', (req,res)=>{
  const {name,age}=req.params;
  return res.status(200).json({message:`Seu nome e ${name}  e você tem ${age} anos de idade`});
})
//
app.listen(3000, () => console.log('ouvindo na porta 3000!'));