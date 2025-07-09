import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
dotenv.config();
const app = express();

const port = process.env.PORT || 5050;

app.get('/',(req,res)=>{
     res.send("Working")
})

connectDB();
app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
})
