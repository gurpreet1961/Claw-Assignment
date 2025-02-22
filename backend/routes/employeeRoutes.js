import express from "express";
import { submitResignation } from "../controllers/resignationController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/resign", authenticate, submitResignation);

export default router;
