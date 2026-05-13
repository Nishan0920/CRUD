import mongoose from "mongoose";
import dotenv, { config } from 'dotenv'
dotenv.config()
const MongoURL: string = process.env.MONGO_URL||"mongodb+srv://CRUD123:CRUD123@cluster0.wibba4d.mongodb.net/CRUD?appName=Cluster0";
const ConnectDB = async ():Promise<void>=>{
   try {
     await mongoose.connect(MongoURL)
    console.log("Connected Successfully")
   } catch (error) {
     const err = error as Error
     console.log("X Connection Failed",err.message)
     process.exit(1)
   }
}
export default ConnectDB
