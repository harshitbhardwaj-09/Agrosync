import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";
import limiter from "../utils/Ratelimiter.js";

const router = express.Router();

router.post("/",limiter, verifyToken, createReview )
router.get("/:postId", getReviews )
router.delete("/:id",limiter, deleteReview)

export default router;