const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const marchandiseCtrl = require("../controllers/marchandisenondangereuse");


router.post(
  "/",
  authMiddleware,
  marchandiseCtrl.createMarchandiseNonDangereuse
);
router.get("/", authMiddleware, marchandiseCtrl.getAllMarchandises);
router.get("/:id", authMiddleware, marchandiseCtrl.getOneMarchandise);
router.put("/:id", authMiddleware, marchandiseCtrl.modifyMarchandise);
router.delete("/:id", authMiddleware, marchandiseCtrl.deleteMarchandise);

module.exports = router;
