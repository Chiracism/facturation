'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarchandiseNonDangereuse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MarchandiseNonDangereuse.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fret: DataTypes.FLOAT,
    soute: DataTypes.FLOAT,
    port_charge: DataTypes.FLOAT,
    pltc: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'MarchandiseNonDangereuse',
  });
  return MarchandiseNonDangereuse;
};