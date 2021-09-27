const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create marchandise
exports.createMarchandiseDangereuse = async (req, res, next) => {
  const marchandiseObject = JSON.parse(JSON.stringify(req.body));

  delete marchandiseObject.id;

  db.MarchandiseDangereuse.create({
    ...marchandiseObject,
  })
    .then((marchandise) => {
      res.status(200).json(marchandise.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single marchandise
exports.getOneMarchandise = async (req, res, next) => {
  let marchandise = await db.MarchandiseDangereuse.findOne({
    where: { id: req.params.id },
  });

  if (marchandise) {
    res.status(200).json(marchandise);
  } else {
    res.status(400).json({ message: "Error on getting marchandise" });
  }
};

// Endpoint to update marchandise
exports.modifyMarchandise = async (req, res, next) => {
  const marchandiseObject = JSON.parse(JSON.stringify(req.query));

  db.MarchandiseDangereuse.update(
    { ...marchandiseObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.MarchandiseDangereuse.findOne({ where: { id: req.params.id } })
        .then((marchandise) => {
          res.status(200).json(marchandise);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all marchandises
exports.getAllMarchandises = async (req, res, next) => {
  db.MarchandiseDangereuse.findAll()
    .then((marchandises) => {
      res.status(200).json(marchandises);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete marchandise
exports.deleteMarchandise = async (req, res, next) => {
  db.MarchandiseDangereuse.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "marchandise deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
