import { useEffect } from "react";
import { useConversations } from "../../store/useConversation";
import LogoutBtn from "./LogoutBtn"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { BiMessageRoundedDots } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversations()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className="md:min-w-[650px] flex flex-col">
            {!selectedConversation ? (<NoChat />) : (
                <>
                    <div className="bg-sky-700 opacity-80 px-4 flex justify-between items-center py-2 mb-2">
                        <div className="flex items-center">
                            <span className="label-text"></span>
                            <span className="text-white font-semibold text-lg">{selectedConversation.fullName}</span>
                        </div>
                        <div>
                            <LogoutBtn />
                        </div>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>

    )
}

export default MessageContainer


const NoChat = () => {
    const{authUser} = useAuthContext()
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center  text-green-600 font-semibold flex flex-col items-center gap-2">
                <p className="text-3xl ">Welcome ! {authUser.fullName}</p>
                <p className="text-xl">Select chat to start chatting!</p>
                <BiMessageRoundedDots className="text-[150px]  text-center" />
            </div>
        </div>
    );
}