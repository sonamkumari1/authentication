import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

const PORT = 4000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});