import  mongo  from "mongoose";

const uuserSchema=mongo.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    }
})



const userModel=mongo.model("User",uuserSchema);


export default userModel;