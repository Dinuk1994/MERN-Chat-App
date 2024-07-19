import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeltons/MesasgeSkelton";
import Message from "./Message"


const Messages = () => {

  const {messages,loading} = useGetMessages()
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					
					<Message key={message._id} message={message}/>
			
				))}
        {loading && [...Array(3)].map((_,index) => <MessageSkeleton key={index}/>)}
        {!loading && messages.length ===0 && (
          <p className="text-center text-white">Send a message to start a conversation</p>
        )}
    </div>
  )
}

export default Messages