import path from "path"
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import cors from 'cors'
import { app, server } from './socket/socket.js'


const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(express.json()) //to parse the incoming requests with JSON payloads(from req.)
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT , ()=>{
    connectToMongoDB();
    console.log(`Server Runnig on port ${PORT}`);
})