const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const typeContainerCtrl = require("../controllers/typecontainer");

router.get("/", authMiddleware, typeContainerCtrl.getAllTypesContainer);
router.get("/:id", authMiddleware, typeContainerCtrl.getOneTypeContainer);

module.exports = router;
