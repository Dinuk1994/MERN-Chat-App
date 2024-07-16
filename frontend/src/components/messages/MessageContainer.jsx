import LogoutBtn from "./LogoutBtn"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { BiMessageRoundedDots } from "react-icons/bi";

const MessageContainer = () => {

    const noChat = false;
    return (
        <div className="md:min-w-[650px] flex flex-col">
            {noChat ? (<NoChat />) : (
                <>
                    <div className="bg-green-600 opacity-80 px-4 flex justify-between items-center py-2 mb-2">
                        <div className="flex items-center">
                            <span className="label-text"></span>
                            <span className="text-white font-semibold text-lg">Harry Potter</span>
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
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center  text-green-600 text-3xl font-semibold flex flex-col items-center gap-2">
                <p>Select chat to start chatting!</p>
                <BiMessageRoundedDots className="text-[150px]  text-center" />
            </div>
        </div>
    );
}