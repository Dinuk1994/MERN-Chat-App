/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../formattedTime/FormattedTime";
import { useConversations } from "../../store/useConversation"


const Message = ({message}) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} =useConversations();
    const myMessage = message.senderId === authUser._id;
    const chatClassName = myMessage ? "chat-end" : 'chat-start';
    const profilePic = myMessage ? authUser.profilePic : selectedConversation?.profilePic
    const chatColor = myMessage ? 'bg-cyan-700' : "";
    const formattedTime = extractTime(message.createdAt)
    
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic}/>
                </div>
            </div>
        
            <div className={`chat-bubble  ${chatColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 pb-1">{formattedTime}</div>
        </div>
    )
}

export default Message