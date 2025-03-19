// import jwt from "jsonwebtoken";
// import { Model } from "../model/index.js";

// export const Auth = async (req,res,next)=>{
//     try{
//         let token = req?.headers?.["x-token"];
//         let matchtoken = await jwt.verify(token,process.env.SECRET_KEY);
//         let matchuser = await Model?.User?.findById(matchtoken.userId);

//         if(matchuser.usertype !== "admin")
//         {
//             throw new Error("only admin are allowed")
//         }

//         next();
//     }
//     catch(err){
//         res.status(400).send({
//             data: null,
//             success: false,
//             message: err.message
//         })
//     }
// }

// export const userAuth =  async(req,res,next)=>{
//  try{
//     let token = req?.headers?.["x-token"];
//     console.log("🚀 ~ userAuth ~ token:", token)
//     let matchtoken = await jwt?.verify(token, process.env.SECRET_KEY);
//     console.log("🚀 ~ userAuth ~ matchtoken:", matchtoken)
//     let matchUser = await Model?.User?.findById(matchtoken.userId);
//     console.log("🚀 ~ userAuth ~ matchUser:", matchUser)

//     req.me = matchUser;
//     req.me.userId = matchUser

//     next();
//  }
//  catch(err){
//     res.status(400).send({
//         data: null,
//         success: false,
//         message: err.message
//     })
//  }
// }