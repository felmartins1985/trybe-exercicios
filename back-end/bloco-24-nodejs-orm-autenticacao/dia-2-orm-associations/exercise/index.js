const bodyParser = require('body-parser');
const patientsController= require('./controllers/patientsController');
const express = require('express');
const surgeriesController= require('./controllers/surgeriesController');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', patientsController.getAllPatients);
app.get('/surgeries', patientsController.getAllPatientsSurgeries);
app.get('/plans/:id', patientsController.getAllPlans);
app.post('/surgeries', patientsController.createPatient);
app.get('/surgeries/nodoctor', patientsController.getAllPatientsSurgeriesExceptDoctor);
app.get('/surgeries/:name', surgeriesController.findSurgeryByDoctor);
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});