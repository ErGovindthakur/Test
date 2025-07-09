import express from "express"
import connectDB from "./config/db.js";
import cors from "cors"
import urlRoutes from "./routes/urlRoutes.js"
import dotenv from "dotenv"
dotenv.config();
const app = express();

const port = process.env.PORT || 5050;

// Middlewares
app.use(cors())
app.use(express.json());

// actual routes
app.use("/api",urlRoutes)

connectDB();
app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
})
