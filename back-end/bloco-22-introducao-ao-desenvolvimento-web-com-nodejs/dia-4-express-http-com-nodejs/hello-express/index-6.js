const express = require('express');
const bodyParser = require('body-parser');
// os dados enviados pelo front-end são comprimidos, e para conseguir remontar os dados 
//enviados precisamos parsear as informações para um formato compreensível
// para o back-end, esse formato no caso vai ser JSON.
const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];
const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
//

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice, minPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice) 
  && r.price>=Number(minPrice));
	res.status(200).json(filteredRecipes);
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
//você precisa ter uma rota que recebe um token para ser validada, 
//a regra da validação é checar se o token possui 16 caracteres
  res.status(200).json({message: 'Valid Token!'})
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  // os atributos id, name e price foram desestruturados do objeto req.body para que, 
  //na segunda linha, esses valores sejam utilizados para inserir um novo objeto dentro
  // do array receitas
  res.status(201).json({ message: 'Recipe created successfully!'});
  //a resposta foi retornada com o status 201, que serve para sinalizar
  // que ocorreu uma operação de persistência de uma informação
});
app.get('/drinks', function (req, res) {
  res.status(200).send(drinks);
});
app.post('/drinks', function(req,res){
  const {id,name,price}=req.body;
  drinks.push({id,name,price})
  res.status(201).json({message:'Drink adicionado com sucesso!'})
})
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});