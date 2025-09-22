import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Mongoose DB connected successfully!")
    }catch(e){
        console.log(e.message);
        process.exit(1);
    }
}


export default connectDB;