import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const url = process.env.WEB_MDB_URL
// LOCAL_DB_URL
// WEB_MDB_URL

const connectDB = async ()=> {
    try {
        await mongoose.connect(url)
        console.log("DB connected");
        
    } catch (error) {
        console.log("DB connection error!!!! \n",error);
        
    }
}

export default connectDB
