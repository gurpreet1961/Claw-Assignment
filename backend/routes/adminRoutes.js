import express from "express";
import { viewResignations, approveResignation } from "../controllers/hrController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/resignations", authenticate, viewResignations);
router.put("/conclude_resignation", authenticate, approveResignation);

export default router;
