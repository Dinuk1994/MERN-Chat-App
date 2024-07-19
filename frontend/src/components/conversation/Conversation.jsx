/* eslint-disable react/prop-types */

import { useSocketContext } from '../../context/SocketContext';
import { useConversations } from '../../store/useConversation';

const Conversation = ({ conversation, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <div className="mt-2">
            <div className="divider my-0 py-0 h-0 mb-2 "></div>
            <div className={`flex gap-2 item-center hover:bg-cyan-700 rounded p-2 py-1 cursor-pointer 
                ${isSelected ? 'bg-cyan-700' : ''}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >

                <div className={`avatar ${isOnline?"online":""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-semibold text-gray-200">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conversation