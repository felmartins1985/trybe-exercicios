// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
      { foreignKey: 'plan_id', as: 'patients' });// <-- vem como um array de objetos
  };

  return Plan;
};