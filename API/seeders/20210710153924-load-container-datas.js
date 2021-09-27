"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Containers", [
      {
        id: 1,
        name: "Conteneur FCL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Conteneur S/O",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Conteneur produits IMO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Ciment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "REMANTS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "B.T.S",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "WORLDWIDE SHIPPING AND FORWARDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "ECULINE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "WISKERKE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "MARINVESTS EXPEDITION",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: "WESER FORWARDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: "SOLUCIOUS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: "COMEXAS BENELUX",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: "SDV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Containers", null, {});
  },
};
