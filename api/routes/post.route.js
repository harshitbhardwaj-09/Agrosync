import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getPostsByUserId,
} from "../controllers/post.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import limiter from "../utils/Ratelimiter.js";

const router = express.Router();

router.post("/",limiter, verifyToken, createPost);
router.delete("/:id",limiter, verifyToken, deletePost);
router.get("/single/:id", getPost);
router.get("/", getPosts);
router.get("/user/:userId", verifyToken, getPostsByUserId);


export default router;