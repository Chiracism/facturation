const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to get single type container
exports.getOneFullContainer = async (req, res, next) => {
  let fullContainer = await db.FullContainer.findOne({
    where: {
      [Op.and]: [
        { id_type_container: req.params.idType },
        {
          id_container: req.params.idContainer,
        },
      ],
    },
  });

  if (fullContainer) {
    res.status(200).json(fullContainer);
  } else {
    res.status(400).json({ message: "Error on getting full container" });
  }
};
