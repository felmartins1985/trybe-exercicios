const cepMiddleware=require('../middleware/CepMiddleware');
const Service=require('../services/CepService');
const router = express.Router();

router.get('/cep', cepMiddleware.validateCepMiddleware,async (req, res)=>{
  const {cep, logradouro, bairro, localidade, uf }= req.body;
  const cepGet= await Service.findAdressByCep({cep, logradouro,
    bairro, localidade, uf });
  return res.status(200).json(cepGet);
})


module.exports={
  router,
}