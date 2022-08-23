// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const PatientSurgerie = sequelize.define('Patient_surgerie',
    {},
    { timestamps: false },
  );

  PatientSurgerie.associate = (models) => {
    models.Patient.belongsToMany(models.Surgerie, {
      as: 'surgeries',
      through: PatientSurgerie,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgerie.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgerie,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgerie;
};