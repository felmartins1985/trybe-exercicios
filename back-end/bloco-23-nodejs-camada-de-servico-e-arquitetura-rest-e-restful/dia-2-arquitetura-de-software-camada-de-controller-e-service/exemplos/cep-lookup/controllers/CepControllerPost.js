const cepMiddleware=require('../middleware/CepMiddleware');
const Service=require('../services/CepService');
const router = express.Router();

router.post('/:cep', cepMiddleware.verifyCepMiddleware,async (req, res)=>{
  const {cep}=req.params;
  const cepCreate= await Service.create(cep);
  return res.status(201).json(cepCreate);
})


module.exports={
  router,
}