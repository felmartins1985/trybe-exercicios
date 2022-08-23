// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgerie', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  });

  return Surgerie;
};