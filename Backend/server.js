import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/api", urlRoutes); // <-- This is correct

connectDB();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
