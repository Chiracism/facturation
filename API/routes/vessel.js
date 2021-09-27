const express = require("express");
const router = express.Router();

import authMiddleware from "../middleware/auth";

const vesselCtrl = require("../controllers/vessel");

router.get("/", authMiddleware, vesselCtrl.getAllVessels);
router.get("/:id", vesselCtrl.getOneVessel);
router.put("/:id", authMiddleware, vesselCtrl.modifyVessel);
router.post("/", authMiddleware, vesselCtrl.createVessel);
router.delete("/:id", authMiddleware, vesselCtrl.deleteVessel);

module.exports = router;
