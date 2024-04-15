import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
    try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
        )
        console.log(`MongoDb Connection Successfull !! DB Host : ${connection.connection.host}`)
        
    }
    catch (error) {
        console.log("MongoDb Connection FAILED", error)
        process.exit(1);
    }

}

export default dbConnection