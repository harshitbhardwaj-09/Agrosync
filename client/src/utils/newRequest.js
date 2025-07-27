import axios from "axios";

const newRequest = axios.create({
  //baseURL: "http://localhost:3000/api/",
  // baseURL: "https://api-h2x3.onrender.com/api/",
  //  baseURL: "https://krrish.me/api/",
  baseURL: import.meta.env.PROD
     ? "https://agrosync-backend.vercel.app/api/"
     : "http://localhost:3000/api/",
  withCredentials: true,
});

export default newRequest;