const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const materielRoulatCtrl = require("../controllers/materielroulant");

router.get("/", authMiddleware, materielRoulatCtrl.getAllMaterielRoulants);
router.get("/:id", authMiddleware, materielRoulatCtrl.getOneMaterielRoulant);
router.put("/:id", authMiddleware, materielRoulatCtrl.modifyMaterielRoulant);
router.post("/", authMiddleware, materielRoulatCtrl.createMaterielRoulant);
router.delete("/:id", authMiddleware, materielRoulatCtrl.deleteMaterielRoulant);

module.exports = router;
