const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const simpsonsFunction = require('./fs-utils');

app.get('/simpsons', async function(req,res){
  try{
  const simpsons= await simpsonsFunction.getSimpsons();
  res.status(200).json(simpsons);    
  }catch (e){
    return res.status(500).end();
  };
})
//
app.get('/simpsons/:id', async function(req,res){
  try{
    const {id}= req.params;
    const simpsons= await simpsonsFunction.getSimpsons();
    const findSimpsonById= simpsons.find((s)=>s.id===id);
    if(!findSimpsonById){
      res.status(404).json({message:'simpsons not found'});
    };
    res.status(200).json(findSimpsonById);
  }
  catch(e){
    return res.status(500).end();
  }
})
//
app.post('/simpsons', async function(req,res){
  try{
    const {id,name}= req.body;
    const simpsons= await simpsonsFunction.getSimpsons();
    const validation= simpsons.some((s)=>s.id===id);
    if(validation){
      res.status(409).json({message:`id already exists`})
    }
   simpsons.push({id,name});
   simpsonsFunction.setSimpsons(simpsons);
  // simpsonsFunction.setSimpsons({id,name});
  res.status(204).end();
  } catch(e){
    return res.status(500).end();
  }
})
app.listen(3000, () => console.log('ouvindo na porta 3000!'));