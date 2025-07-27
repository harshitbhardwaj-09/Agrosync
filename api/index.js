import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRoute from "./routes/api.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import limiter from "./utils/Ratelimiter.js";

const app = express();

// Load environment variables
dotenv.config({ path: '../.env' });

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ 
  origin: [
    'http://localhost:5173', 
    'https://agrosync-prototype.vercel.app',
    'https://agrosync.vercel.app',
    'https://agrosynx.vercel.app'
  ], 
  credentials: true 
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.get('/', (req, res) => {
  res.status(200).send('Server up and running')
});

// Connect to MongoDB
connect();

// Export for Vercel
export default app; 