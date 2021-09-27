const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const marchandiseDangereuseCtrl = require("../controllers/marchandisedangereuse");

router.post(
  "/",
  authMiddleware,
  marchandiseDangereuseCtrl.createMarchandiseDangereuse
);
router.get("/", authMiddleware, marchandiseDangereuseCtrl.getAllMarchandises);
router.get("/:id", authMiddleware, marchandiseDangereuseCtrl.getOneMarchandise);
router.put("/:id", authMiddleware, marchandiseDangereuseCtrl.modifyMarchandise);
router.delete(
  "/:id",
  authMiddleware,
  marchandiseDangereuseCtrl.deleteMarchandise
);

module.exports = router;
