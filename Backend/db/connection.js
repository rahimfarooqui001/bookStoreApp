import mongoose from "mongoose";

let dbConnection=async(dbUrl,dbName)=>{
    try {
        await mongoose.connect(dbUrl+dbName)
        console.log(`connected to database ${dbName}`)
    
    } catch (error) {
        console.log(`error while connecting to database ${error}`)
        
    }
    }
    
    export default dbConnection