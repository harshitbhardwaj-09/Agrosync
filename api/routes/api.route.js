import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getPostsByUserId,
} from "../controllers/post.controller.js";
import {
  createOrder,
  getOrders,
  confirmOrder,
  completeOrder,
  cancelOrder,
} from "../controllers/order.controller.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import limiter from "../utils/Ratelimiter.js";

const router = express.Router();

// Auth routes
router.post("/auth/register", limiter, register);
router.post("/auth/login", limiter, login);
router.post("/auth/logout", limiter, logout);

// Post routes
router.post("/posts", limiter, verifyToken, createPost);
router.delete("/posts/:id", limiter, verifyToken, deletePost);
router.get("/posts/single/:id", getPost);
router.get("/posts", getPosts);
router.get("/posts/user/:userId", verifyToken, getPostsByUserId);

// Order routes
router.post("/orders", limiter, verifyToken, createOrder);
router.get("/orders", verifyToken, getOrders);
router.put("/orders/:id/confirm", limiter, verifyToken, confirmOrder);
router.put("/orders/:id/complete", limiter, verifyToken, completeOrder);
router.put("/orders/:id/cancel", limiter, verifyToken, cancelOrder);

// Review routes
router.post("/reviews", limiter, verifyToken, createReview);
router.get("/reviews/:postId", getReviews);
router.delete("/reviews/:id", limiter, verifyToken, deleteReview);

// User routes
router.get("/users/:id", getUser);
router.put("/users/:id", limiter, verifyToken, updateUser);
router.delete("/users/:id", limiter, verifyToken, deleteUser);

export default router; 