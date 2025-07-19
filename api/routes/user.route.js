import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
 import { verifyToken } from "../middleware/jwt.js";
 import limiter from "../utils/Ratelimiter.js";

const router = express.Router();

router.delete("/:id",limiter, verifyToken, deleteUser);
router.get("/:id", getUser);

export default router;