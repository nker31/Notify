import mongoose from 'mongoose'

const emerSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    phoneNumber:String 
});

export const UserModel = mongoose.model("users", UserSchema)

