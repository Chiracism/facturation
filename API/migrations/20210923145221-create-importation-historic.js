'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ImportationHistorics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agence: {
        type: Sequelize.STRING
      },
      numero_fiche: {
        type: Sequelize.INTEGER
      },
      serie: {
        type: Sequelize.STRING
      },
      envoi: {
        type: Sequelize.STRING
      },
      pol: {
        type: Sequelize.STRING
      },
      pod: {
        type: Sequelize.STRING
      },
      dollar_taux: {
        type: Sequelize.INTEGER
      },
      euro_taux: {
        type: Sequelize.INTEGER
      },
      tva: {
        type: Sequelize.FLOAT
      },
      tva_dgrkc: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
      },
      qte_authentification_connaissement: {
        type: Sequelize.INTEGER
      },
      qte_conventionnel_50t_consignation: {
        type: Sequelize.INTEGER
      },
      qte_conventionnel_milieu_consignation: {
        type: Sequelize.INTEGER
      },
      qte_conventionnel_500t_consignation: {
        type: Sequelize.INTEGER
      },
      qte_vehicule_consignation: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_20_consignation: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_40_consignation: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_20_tracking: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_40_tracking: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_20_equipement: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_40_equipement: {
        type: Sequelize.INTEGER
      },
      qte_frais_correction_manifeste_equipement: {
        type: Sequelize.INTEGER
      },
      qte_frais_lettre_garantie_simple_equipement: {
        type: Sequelize.INTEGER
      },
      qte_conventionnel_navigation: {
        type: Sequelize.INTEGER
      },
      qte_vehicule_navigation: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_20_navigation: {
        type: Sequelize.INTEGER
      },
      qte_conteneur_40_navigation: {
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
    await queryInterface.dropTable('ImportationHistorics');
  }
};