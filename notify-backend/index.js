import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {PORT, mongoDB} from './config.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'
import markersRoutes from './routes/markers.js'

const app = express()

//middleware
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect(mongoDB).then(() => {
    console.log("MongoDB connected")
});

app.use('/api/auth',authRoutes)
app.use('/api/markers',markersRoutes)


app.listen(PORT, () => {
    console.log("server is running", PORT)
})
