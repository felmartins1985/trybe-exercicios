const { Patient, Surgeries } = require('../models');
const findSurgeryByDoctor = async (req, res) => {
  try{
    const doctor=req.params.name;
    // console.log(doctor);
    const surgeries= Surgeries.findAll({
      where: { doctor },
      include: [{ model: Patient, as: 'patients',through: { attributes: [] } }],
    })
    if (!surgeries || surgeries.length === 0) {
      return res.status(404).json({message:'No surgeries found' })
    }
    res.status(200).json(surgeries);
  }
  catch(e){
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports={
  findSurgeryByDoctor,
}



