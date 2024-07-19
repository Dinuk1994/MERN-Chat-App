import { Server } from "socket.io";
import http from 'http'
import { Socket } from "dgram";
import { log } from "console";

const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors : {
        origin : ["http://localhost:5173" ],
        methods : ["GET","POST"]
    }
})

io.on('connection',(socket)=>{
    console.log("Socket Connected" ,socket.id);

    socket.on("disconnect" ,()=>{
        console.log("Socket Disconnected" ,socket.id);
    })
})

export {app,io,server}