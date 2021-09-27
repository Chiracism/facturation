"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TypeContainers", [
      {
        id: 1,
        name: "20'",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "20' flat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "40'",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TypeContainers", null, {});
  },
};
