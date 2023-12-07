import mongoose from 'mongoose'

const markerSchema = new mongoose.Schema({
    markerTimeStamp :{type : Date ,default: Date.now},
    username : String,
    type: String,
    position:{ lat : Number, lng : Number },
    details: String,
    requiredResources: String,
    location: String
});

export const markersModel = mongoose.model("markers", markerSchema)

