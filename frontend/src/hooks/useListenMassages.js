import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import  {useConversations}  from "../store/useConversation"
import NotificationSound from "../sounds/notification.mp3"


const useListenMassages = () => {
    const{socket}=useSocketContext()
    const {messages,setMessages}=useConversations()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            const sound = new Audio(NotificationSound)
            sound.play();
            setMessages([...messages,newMessage])
        })

        return()=>socket?.off("newMessage") // very Important
    },[socket,setMessages,messages])
}

export default useListenMassages