import mongoose from "mongoose";

const connectDB = async (Db_URL) =>{
    try{
        const DB_OPTION ={
            dbName : "Employee",
        };

     await mongoose.connect(Db_URL, DB_OPTION);
     console.log("Connect Successfully...");

    }catch(err){
        console.log(err);
    }
};

export default connectDB;