import mongoose from "mongoose";

const userSchema=mongoose.Schema({ 
    fullname:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String,required:true },
    

})

const userModel=mongoose.model('user',userSchema)

export default userModel;