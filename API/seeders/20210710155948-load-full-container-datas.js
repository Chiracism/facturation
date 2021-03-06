"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("FullContainers", [
      {
        id_container: 1,
        id_type_container: 1,
        fret: 2200,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 1,
        id_type_container: 2,
        fret: 2200,
        soute: 250,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 1,
        id_type_container: 3,
        fret: 3960,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 2,
        id_type_container: 1,
        fret: 1980,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 2,
        id_type_container: 2,
        fret: 1980,
        soute: 250,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 2,
        id_type_container: 3,
        fret: 3564,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 3,
        id_type_container: 1,
        fret: 2640,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 3,
        id_type_container: 2,
        fret: 2640,
        soute: 250,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 3,
        id_type_container: 3,
        fret: 4752,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 4,
        id_type_container: 1,
        fret: 2000,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 4,
        id_type_container: 2,
        fret: 2000,
        soute: 250,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 4,
        id_type_container: 3,
        fret: 3600,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 5,
        id_type_container: 1,
        fret: 2000,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 5,
        id_type_container: 3,
        fret: 3600,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 6,
        id_type_container: 1,
        fret: 2050,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 6,
        id_type_container: 3,
        fret: 2050,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 7,
        id_type_container: 1,
        fret: 2050,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 7,
        id_type_container: 3,
        fret: 2050,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 8,
        id_type_container: 1,
        fret: 2100,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 8,
        id_type_container: 3,
        fret: 3780,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 9,
        id_type_container: 1,
        fret: 2100,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 9,
        id_type_container: 3,
        fret: 3690,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 10,
        id_type_container: 1,
        fret: 2100,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 10,
        id_type_container: 3,
        fret: 3780,
        soute: 1150,
        port_surcharge: 600,
        terminal_charge: 140,
        emergency: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 11,
        id_type_container: 1,
        fret: 2050,
        soute: 575,
        port_surcharge: 300,
        terminal_charge: 140,
        emergency: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 12,
        id_type_container: 1,
        fret: 1650,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 12,
        id_type_container: 3,
        fret: 4752,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 13,
        id_type_container: 1,
        fret: 1650,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 13,
        id_type_container: 3,
        fret: 4752,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 14,
        id_type_container: 1,
        fret: 1980,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_container: 14,
        id_type_container: 3,
        fret: 3568,
        soute: 0,
        port_surcharge: 0,
        terminal_charge: 0,
        emergency: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FullContainers", null, {});
  },
};
