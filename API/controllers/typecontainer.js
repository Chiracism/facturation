const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to get single type container
exports.getOneTypeContainer = async (req, res, next) => {
  let typeContainer = await db.TypeContainer.findOne({
    where: { id: req.params.id },
  });

  if (typeContainer) {
    res.status(200).json(typeContainer);
  } else {
    res.status(400).json({ message: "Error on getting type container" });
  }
};

// Endpoint to get all types container
exports.getAllTypesContainer = async (req, res, next) => {
  db.TypeContainer.findAll()
    .then((typeContainers) => {
      res.status(200).json(typeContainers);
    })
    .catch((error) => res.status(400).json({ error }));
};
