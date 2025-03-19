import "dotenv/config"
import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import farmRouter from "./router/farm.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/farm", farmRouter)

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("everything is fine")
})


app.listen(port,()=>{
    connectDB();
    console.log(`your server is runnig on http://localhost:${port}`)
})
