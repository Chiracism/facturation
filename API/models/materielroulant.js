'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaterielRoulant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MaterielRoulant.init({
    cubage: DataTypes.INTEGER,
    fret: DataTypes.FLOAT,
    sout: DataTypes.INTEGER,
    pc: DataTypes.INTEGER,
    pltc: DataTypes.FLOAT,
    dossier: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MaterielRoulant',
  });
  return MaterielRoulant;
};