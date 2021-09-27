"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      "Users", // table name
      "commission", // new field name
      {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      }
    );

    await queryInterface.addColumn(
      "Users", // table name
      "extra_fac", // new field name
      {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Users", "commission");
    await queryInterface.removeColumn("Users", "extra_fac");
  },
};
