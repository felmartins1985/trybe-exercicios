// task controller
const taskMiddleware= require('/middelwares/taskMiddleware');
router.post('/post', taskMiddleware.validateTask,async (req, res) => {
  const {name, user}= req.body;
// qnd tiver alguma invalidacao, o message vai ser preenchido e o task nulo
  // const {code,message,task}= await TaskService.create(name,user);--> foi colocado no middleware
  // se tiver uma message,significa que teve erro de validacao e vai devolver uma mensagem de erro com seu codigo
  // if(message) return res.status(code).json({message});==> foi colocado no middleware
  // res.status(code).json(task);
  const task= await TaskService.create(name,user);
  res.status(200).json(task);//--> tem que escrever o codigo, pois ele nao esta previsto em nenhum local
})

// taskMiddleware
const taskSchema= require('/schemas/taskSchema');
const validateTask=(req,res,next)=>{
  const {name, user}= req.body;
  const validations= taskSchema.validate(name,user);
  // se tiver a chave message, significa que tem alguma invalidacao, retorna a resposta para 
  // o usuario e chama o next
  if(validations.message) return res.status(validations.code).json({message: validations.message});
  next();
}

//taskService.js --> a camada de servico nao valida mais, e sim o taskMiddleware
const create=async (name, user)=>{
  // nao preciso mais das 3 linhas abaixo pois passei a validacao para o middleware
  // const validations= taskSchema.validate(name,user);
  //  se tiver a chave message, significa que tem alguma invalidacao, retornando o codigo e a mensagem
  // if(validations.message) return validations;
  const task= await Task.create(name, user);
  // return {code:200,task};--> foi colocado no middleware
  return task;
}

// taskSchema.js
const blank=(value)=> (!value);
const isNotString=(value)=> typeof value !== 'string';
const isLengthLetterThan=(value,min)=> value.length<min;
const validate=(name,user)=>{
  if(blank(name)) return {code: 422, message: 'Nome inválido'};
  if(isNotString(name)) return {code: 422, message: 'Nome deve ser uma string'};
  if(isLengthLetterThan(name,5)) return {code: 422, message: 'Nome deve ter no mínimo 5 caracteres'};
  if(blank(user)) return {code: 422, message: 'Usuário inválido'};
  if(isNotString(user)) return {code: 422, message: 'User deve ser uma string'};
  if(isLengthLetterThan(user,3)) return {code: 422, message: 'User deve ter no mínimo 3 caracteres'};
  return {}
}



// task model
const createTask= async (name,user)=>{
  const {insertId}= await connection().then(db=>db.collection('tasks').insertOne({name,user}));
  return {
    id: insertId,
    name,
    user
  }
}
