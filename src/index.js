import dotenv from "dotenv";
import createApp from "./app";
import connectDB from "./config/db";
dotenv.config();


const PORT=process.env.POST || 5000;


(async()=>{
    await connectDB();
    const app=await createApp();

    app.listen(PORT,()=>{
        console.log(`Server is Running - PORT: ${PORT}`)
    });
})();
