validateProductName=(req,res,next)=>{
  const{productName}= req.body;
  if(!productName || productName==='') {
    return res.status(400).json({error:'O campo productName é obrigatório'});
  }
  if(productName.length<4){
    return res.status(400).json({error:'O campo productName deve ter pelo menos 4 caracteres'});
  }

  next();
}

module.exports=validateProductName;