'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarchandiseDangereuse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MarchandiseDangereuse.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fret: DataTypes.FLOAT,
    soute: DataTypes.FLOAT,
    port_cahrge: DataTypes.FLOAT,
    pltc: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'MarchandiseDangereuse',
  });
  return MarchandiseDangereuse;
};