import mongoose from "mongoose";

export const connectDB = ()=>{
    return mongoose
    .connect("mongodb://127.0.0.1:27017/FarmBackend")
    .then(()=>{
        console.log("your database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}