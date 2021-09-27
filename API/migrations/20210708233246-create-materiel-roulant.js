'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MaterielRoulants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cubage: {
        type: Sequelize.INTEGER
      },
      fret: {
        type: Sequelize.FLOAT
      },
      sout: {
        type: Sequelize.INTEGER
      },
      pc: {
        type: Sequelize.INTEGER
      },
      pltc: {
        type: Sequelize.FLOAT
      },
      dossier: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MaterielRoulants');
  }
};