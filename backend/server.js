import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(cors())
app.use(express.json()) //to parse the incoming requests with JSON payloads(from req.)
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT , ()=>{
    connectToMongoDB();
    console.log(`Server Runnig on port ${PORT}`);
})