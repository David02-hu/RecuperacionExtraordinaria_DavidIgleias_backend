import mongoose from "mongoose";
const connectDB = async () => {
    try{ 
        await mongoose.connect( preocess.env.MONGODB_URI), 
        CONSOLE.LOG("Mongoose conectado"); 
    }catch (error){
        console.error("error al conectar", error,message);
        process.exit(1); 
    }
}; 

export default connectDB; 