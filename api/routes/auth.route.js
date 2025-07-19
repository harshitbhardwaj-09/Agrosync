import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import limiter from "../utils/Ratelimiter.js";

const router = express.Router();

router.post("/register",limiter, register)
router.post("/login",limiter, login)
router.post("/logout",limiter, logout)

export default router;