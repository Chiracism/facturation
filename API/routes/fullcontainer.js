const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const fullContainerCtrl = require("../controllers/fullcontainer");

router.get(
  "/:idType/:idContainer",
  authMiddleware,
  fullContainerCtrl.getOneFullContainer
);

module.exports = router;
