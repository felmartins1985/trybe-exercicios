const cepSchema=require('../schemas/cepSchema');

const validateCepMiddleware=(req,_res,next)=>{
  const {cep}=req.params;
  const validations=cepSchema.validateFindCep(cep);
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
const verifyCepMiddleware= async (req,_res,next)=>{
  const {cep}=req.body;
  const validations= await cepSchema.verifyCreateCep(cep);
  console.log(validations,'mid')
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