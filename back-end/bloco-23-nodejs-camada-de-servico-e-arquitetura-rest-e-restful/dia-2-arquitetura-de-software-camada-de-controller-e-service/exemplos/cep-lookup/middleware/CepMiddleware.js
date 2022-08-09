const cepSchema=require('../schemas/cepSchema');
const validateCepMiddleware=(req,_res,next)=>{
  const {cep}=req.params;
  const validations=cepSchema.validate(cep);
  // if(validations.message) return res.status(validations.code).json({message: validations.message});
  if(validations.message){
    return next({
      code: validations.code,
      message: validations.message
    })
  }
  next();
}
//
const verifyCepMiddleware=(req,_res,next)=>{
  const {cep}=req.body;
  const validations=cepSchema.verifyCep(cep);
  // if(validations.message) return res.status(validations.code).json({message: validations.message});
  if(validations.message){
    return next({
      code: validations.code,
      message: validations.message
    })
  }
  next();
}
//
module.exports={
  validateCepMiddleware,
  verifyCepMiddleware,
}