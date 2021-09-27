const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create materiel roulant
exports.createMaterielRoulant = async (req, res, next) => {
  const materielRoulantObject = JSON.parse(JSON.stringify(req.body));

  delete materielRoulantObject.id;

  db.MaterielRoulant.create({
    ...materielRoulantObject,
  })
    .then((materielRoulant) => {
      res.status(200).json(materielRoulant.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single materiel roulant by cubage
exports.getOneMaterielRoulant = async (req, res, next) => {
  let materielRoulant = await db.MaterielRoulant.findOne({
    where: { cubage: req.params.id },
  });

  if (materielRoulant) {
    res.status(200).json(materielRoulant);
  } else {
    res.status(400).json({ message: "Error on getting materiel roulant" });
  }
};

// Endpoint to update materiel roulant
exports.modifyMaterielRoulant = async (req, res, next) => {
  const materielRoulantObject = JSON.parse(JSON.stringify(req.query));

  db.MaterielRoulant.update(
    { ...materielRoulantObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      db.MaterielRoulant.findOne({ where: { id: req.params.id } })
        .then((materielRoulant) => {
          res.status(200).json(materielRoulant);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all materielRoulants
exports.getAllMaterielRoulants = async (req, res, next) => {
  db.MaterielRoulant.findAll()
    .then((materielRoulants) => {
      res.status(200).json(materielRoulants);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete materiel roulant
exports.deleteMaterielRoulant = async (req, res, next) => {
  db.MaterielRoulant.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Materiel roulant deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
