const {Schema}=require("mongoose");

const UserSchema =new Schema({
    fullName:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        
    }
});
