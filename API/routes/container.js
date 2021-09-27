const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const containerCtrl = require("../controllers/container");

router.get("/", authMiddleware, containerCtrl.getAllContainers);
router.get("/:id", authMiddleware, containerCtrl.getOneContainer);
router.put("/:id", authMiddleware, containerCtrl.modifyContainer);
router.delete("/:id", authMiddleware, containerCtrl.deleteContainer);

module.exports = router;
