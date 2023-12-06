import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {PORT, mongoDB} from './config.js'

import authRoutes from './routes/auth.js'
import markersRoutes from './routes/markers.js'

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(mongoDB).then(() => {
    console.log("MongoDB connected")
});

app.use('/api/auth',authRoutes)
app.use('/api/markers',markersRoutes)


app.listen(PORT, () => {
    console.log("server is running", PORT)
})
