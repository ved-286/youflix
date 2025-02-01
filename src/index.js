import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

connectDB();



// import express from "express";

// const app = express()

// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//       app.on("err", (err) => {
//         console.error("ERROR :", err)
//         throw err
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`server is running on port ${process.env.PORT}`)
//       })
//     } catch (error) {
//         console.error("ERROR :", error)
//         throw error
//     }
// })()