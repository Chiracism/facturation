"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Historic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Historic.init(
    {
      serie: DataTypes.STRING,
      client: DataTypes.STRING,
      consignee: DataTypes.STRING,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      unit: DataTypes.STRING,
      price: DataTypes.FLOAT,
      total: DataTypes.FLOAT,
      commission: DataTypes.FLOAT,
      extra: DataTypes.FLOAT,
      solde: DataTypes.FLOAT,
      user: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Historic",
    }
  );
  return Historic;
};
