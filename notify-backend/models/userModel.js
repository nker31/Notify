import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    phoneNumber:String 
});


export const UserModel = mongoose.model("users", UserSchema)