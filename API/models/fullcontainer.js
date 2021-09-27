'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FullContainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FullContainer.init({
    id_container: DataTypes.INTEGER,
    id_type_container: DataTypes.INTEGER,
    fret: DataTypes.INTEGER,
    soute: DataTypes.INTEGER,
    port_surcharge: DataTypes.INTEGER,
    terminal_charge: DataTypes.INTEGER,
    emergency: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FullContainer',
  });
  return FullContainer;
};