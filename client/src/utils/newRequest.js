import axios from "axios";

const newRequest = axios.create({
  //baseURL: "http://localhost:3000/api/",
  // baseURL: "https://api-h2x3.onrender.com/api/",
  //  baseURL: "https://krrish.me/api/",
   baseURL: process.env.NODE_ENV === 'production' 
     ? "https://agrosync-backend.vercel.app/api/"
     : "http://localhost:3000/api/",
  withCredentials: true,
});

export default newRequest;