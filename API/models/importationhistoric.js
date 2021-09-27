"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImportationHistoric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImportationHistoric.init(
    {
      agence: DataTypes.STRING,
      numero_fiche: DataTypes.INTEGER,
      serie: DataTypes.STRING,
      envoi: DataTypes.STRING,
      pol: DataTypes.STRING,
      pod: DataTypes.STRING,
      dollar_taux: DataTypes.INTEGER,
      euro_taux: DataTypes.INTEGER,
      tva: DataTypes.FLOAT,
      tva_dgrkc: DataTypes.FLOAT,
      total: DataTypes.FLOAT,
      vessel: DataTypes.STRING,
      qte_authentification_connaissement: DataTypes.INTEGER,
      qte_conventionnel_50t_consignation: DataTypes.INTEGER,
      qte_conventionnel_milieu_consignation: DataTypes.INTEGER,
      qte_conventionnel_500t_consignation: DataTypes.INTEGER,
      qte_vehicule_consignation: DataTypes.INTEGER,
      qte_conteneur_20_consignation: DataTypes.INTEGER,
      qte_conteneur_40_consignation: DataTypes.INTEGER,
      qte_conteneur_20_tracking: DataTypes.INTEGER,
      qte_conteneur_40_tracking: DataTypes.INTEGER,
      qte_conteneur_20_equipement: DataTypes.INTEGER,
      qte_conteneur_40_equipement: DataTypes.INTEGER,
      qte_frais_correction_manifeste_equipement: DataTypes.INTEGER,
      qte_frais_lettre_garantie_simple_equipement: DataTypes.INTEGER,
      qte_conventionnel_navigation: DataTypes.INTEGER,
      qte_vehicule_navigation: DataTypes.INTEGER,
      qte_conteneur_20_navigation: DataTypes.INTEGER,
      qte_conteneur_40_navigation: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ImportationHistoric",
    }
  );
  return ImportationHistoric;
};
