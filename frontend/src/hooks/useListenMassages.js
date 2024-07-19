import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import  {useConversations}  from "../store/useConversation"


const useListenMassages = () => {
    const{socket}=useSocketContext()
    const {messages,setMessages}=useConversations()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage])
        })

        return()=>socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMassages