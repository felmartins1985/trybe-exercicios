const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const simpsonsUtils = require('./fs-functions');
//
app.get('/ping', function(req,res){
  res.status(200).json({message: 'pong'});
});
app.get('/simpsons', async function(req,res){
  try{
    const getSimpsons= await simpsonsUtils.getSimpsons();
    return res.status(200).json({simpsons: getSimpsons});
  } catch(error){
    return res.status(500).end();
  }
})
app.get('/simpsons/:id', function(req,res){
  const {id}=req.params;
  try{
    const getSimpsons= await simpsonsUtils.getSimpsons();
    const simpsonsId= getSimpsons.find((s)=> s.id===Number(id));
    if(!simpsonsId) return res.status(404).json({message: 'Simpson not found!'});
    res.status(200).json({simpsons: `${simpsonsId}`})
  } catch(error){
    res.status(500).end();
  }
})
//
app.post('/hello', function (req,res){
  const {name}=req.body;
  res.status(201).json({message: `Hello, ${name}`})
});
app.post('/greetings', (req,res)=>{
  const {name,age}= req.body;
  if(Number(age)>17) res.status(200).json({message: `Hello, ${name}`});
  if(Number(age)<=17) res.status(401).json({ message: "Unauthorized"})
})
app.post('/simpsons', async function(req,res){
  try{
    const {id,name}=req.body;
    const getSimpson= await simpsonsUtils.getSimpsons();
    if (getSimpson.some((s)=> s.id===id)){
      res.status(409).json({message: 'id ja existe'})
    }
    await simpsonsUtils.setSimpsons({id,name});
    res.status(204).end();
  } catch(error){
    res.status(500).end();
  }
})
//
app.put('/users/:name/:age', function(req,res){
  const {name,age}=req.params;
  res.status(204).json({message:`Seu nome é ${name} e você tem ${age} anos de idade`})
})
//
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
