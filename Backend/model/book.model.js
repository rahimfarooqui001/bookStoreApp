import mongoose from "mongoose";

const bookSchema=mongoose.Schema({ 
    name:{type:String,required:true},
    price:{type:Number},
    category:{type:String},
    image:{type:String},
    title:{type:String}

})

const bookModel=mongoose.model('Book',bookSchema)

export default bookModel;