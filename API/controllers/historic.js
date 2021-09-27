const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create historic
exports.createHistoric = async (req, res, next) => {
  const historicObject = JSON.parse(JSON.stringify(req.body));

  for (const value of historicObject.rows) {
    delete value.id;
    db.Historic.create({
      ...value,
      client: historicObject.client,
      consignee: historicObject.consignee,
      user: historicObject.user,
      date: historicObject.date,
      serie: historicObject.serie,
    })
      .then((historic) => {
        res.status(200).json(historic.dataValues);
      })
      .catch((error) => res.status(400).json({ error }));
  }
};

// Endpoint to get all historics
exports.getAllHistorics = async (req, res, next) => {
  db.Historic.findAll({
    order: [["createdAt", "DESC"]],
  })
    .then((historics) => {
      res.status(200).json(historics);
    })
    .catch((error) => res.status(400).json({ error }));
};
