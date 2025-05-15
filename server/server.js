import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRouter)

const PORT = 4000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});