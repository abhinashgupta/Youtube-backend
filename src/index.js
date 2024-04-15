import dotenv from "dotenv";
import dbConnection from "./db/index.js";

dotenv.config({
    path: "./env"
})


dbConnection()

// (async() => {
//     const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(`MongoDb Connection Successfull !! DB Host : ${connection.connection.host}`)
//     app.on("error", () => {
//         console.log("Error" , error)
//     })

//     app.listen(process.env.PORT, () => {
//         console.log(`PORT IS RUNNING ON : ${process.env.PORT}`)
//     })
// })()