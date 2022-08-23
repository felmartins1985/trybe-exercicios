const { Patient, Plan, Surgerie } = require('../models');

const getAllPatients= async (req,res)=>{
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plans' },
    });
    if (!patients || patients.length === 0) {
      return res.status(404).json({message:'No patients found' })
    }

    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}
/////////////////////////////////
const getAllPatientsSurgeries= async (req,res)=>{
  try {
    const patients = await Patient.findAll({
      include: { model: Surgerie, as: 'surgeries', through: { attributes: [] } },
    });
    if (!patients || patients.length === 0) {
      return res.status(404).json({message:'No patients found' })
    }

    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}
//////////////////
const getAllPlans= async (req,res)=>{
  try{
    const {id}= req.params;
    const plans = await Plan.findAll({
      where: { plan_id: id },
      include: [{ model: Patient, as: 'patients' }],
    });
    if (!plans){
      return res.status(404).json({ message: 'Plano não encontrado' });
}

  return res.status(200).json(plans);
  }catch(e){
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
////////////////////////
const createPatient = async (req, res) => {
  try{
    const { fullname, plan_id } = req.body;
    const patient = await Patient.create({ fullname, plan_id });
    return res.status(201).json(patient);
  } catch(e){
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
/////////////////////////////
const getAllPatientsSurgeriesExceptDoctor= async (req, res) => {
  try {
    const patients = await Patient.findAll({ 
        include: [{
         model: Surgerie, as: 'surgeries', attributes: { exclude: ['doctor'],through: { attributes: [] } },
        }], 
      });
    if (!patients || patients.length === 0) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }
    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

/////////////////////////
module.exports= { getAllPatients, getAllPatientsSurgeries, getAllPlans, createPatient, getAllPatientsSurgeriesExceptDoctor };