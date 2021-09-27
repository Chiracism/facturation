const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create vessel
exports.createVessel = async (req, res, next) => {
  const vesselObject = JSON.parse(JSON.stringify(req.body));

  delete vesselObject.id;

  db.Vessel.create({
    ...vesselObject,
  })
    .then((vessel) => {
      res.status(200).json(vessel.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single vessel
exports.getOneVessel = async (req, res, next) => {
  let vessel = await db.Vessel.findOne({ where: { id: req.params.id } });

  if (vessel) {
    res.status(200).json(vessel);
  } else {
    res.status(400).json({ message: "Error on getting vessel" });
  }
};

// Endpoint to update vessel
exports.modifyVessel = async (req, res, next) => {
  const vesselObject = JSON.parse(JSON.stringify(req.query));

  db.Vessel.update(
    { ...vesselObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Vessel.findOne({ where: { id: req.params.id } })
        .then((vessel) => {
          res.status(200).json(vessel);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all vessels
exports.getAllVessels = async (req, res, next) => {
  db.Vessel.findAll()
    .then((vessels) => {
      res.status(200).json(vessels);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete vessel
exports.deleteVessel = async (req, res, next) => {
  db.Vessel.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "vessel deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
