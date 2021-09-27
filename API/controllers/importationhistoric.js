const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create historic
exports.createHistoric = async (req, res, next) => {
  const historicObject = JSON.parse(JSON.stringify(req.body));

  delete historicObject.id;

  db.ImportationHistoric.create({
    ...historicObject,
  })
    .then((historic) => {
      res.status(200).json(historic.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get all historics
exports.getAllHistorics = async (req, res, next) => {
  db.ImportationHistoric.findAll({
    order: [["createdAt", "DESC"]],
  })
    .then((historics) => {
      res.status(200).json(historics);
    })
    .catch((error) => res.status(400).json({ error }));
};
