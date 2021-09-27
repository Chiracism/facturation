const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create port
exports.createPort = async (req, res, next) => {
  const portObject = JSON.parse(JSON.stringify(req.body));

  delete portObject.id;

  db.PortDechargement.create({
    ...portObject,
  })
    .then((port) => {
      res.status(200).json(port.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single port
exports.getOnePort = async (req, res, next) => {
  let port = await db.PortDechargement.findOne({
    where: { id: req.params.id },
  });

  if (port) {
    res.status(200).json(port);
  } else {
    res.status(400).json({ message: "Error on getting port" });
  }
};

// Endpoint to update port
exports.modifyPort = async (req, res, next) => {
  const portObject = JSON.parse(JSON.stringify(req.query));

  db.PortDechargement.update(
    { ...portObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.PortDechargement.findOne({ where: { id: req.params.id } })
        .then((port) => {
          res.status(200).json(port);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all ports
exports.getAllPorts = async (req, res, next) => {
  db.PortDechargement.findAll()
    .then((ports) => {
      res.status(200).json(ports);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete port
exports.deletePort = async (req, res, next) => {
  db.PortDechargement.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "port deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
