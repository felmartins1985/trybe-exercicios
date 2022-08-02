const validateInfo=(req,res,next)=>{
  console.log(req.body);
  const {infos}=req.body;
  const {saleDate}=infos;
  const {warrantyPeriod}=infos;
  // const infos = true;
  // const saleDate = '01/08/2022';
  // const warrantyPeriod = 3
  if(!infos){
    return res.status(400).json({"message": "O campo infos é obrigatório"})
  }
  if(!warrantyPeriod){
    return res.status(400).json({"message": "O campo warrantyPeriod é obrigatório" });
  }
  if(warrantyPeriod<1 || warrantyPeriod>3){
    return res.status(400).json({"message": "O campo warrantyPeriod precisa estar entre 1 e 3"});
  }
  if(!saleDate){
    return res.status(400).json({"message": "O campo saleDate é obrigatório"})
  }
  const verifyDate=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if(!verifyDate.test(saleDate)){
    return res.status(400).json({"message": "O campo saleDate não é uma data válida"})
  }
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
next();
}

module.exports=validateInfo;