'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FullContainers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_container: {
        type: Sequelize.INTEGER
      },
      id_type_container: {
        type: Sequelize.INTEGER
      },
      fret: {
        type: Sequelize.INTEGER
      },
      soute: {
        type: Sequelize.INTEGER
      },
      port_surcharge: {
        type: Sequelize.INTEGER
      },
      terminal_charge: {
        type: Sequelize.INTEGER
      },
      emergency: {
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
    await queryInterface.dropTable('FullContainers');
  }
};