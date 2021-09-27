const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to get single container
exports.getOneContainer = async (req, res, next) => {
  let container = await db.Container.findOne({ where: { id: req.params.id } });

  if (container) {
    res.status(200).json(container);
  } else {
    res.status(400).json({ message: "Error on getting container" });
  }
};

// Endpoint to update container
exports.modifyContainer = async (req, res, next) => {
  const containerObject = JSON.parse(JSON.stringify(req.query));

  db.Container.update(
    { ...containerObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      db.Container.findOne({ where: { id: req.params.id } })
        .then((container) => {
          res.status(200).json(container);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all containers
exports.getAllContainers = async (req, res, next) => {
  db.Container.findAll()
    .then((containers) => {
      res.status(200).json(containers);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete container
exports.deleteContainer = async (req, res, next) => {
  db.Container.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Container deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
