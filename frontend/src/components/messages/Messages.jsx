import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeltons/MesasgeSkelton";
import Message from "./Message"
import useListenMassages from "../../hooks/useListenMassages";


const Messages = () => {

  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef();
  useListenMassages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
       {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length-1? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length=== 0 && (
        <p className="text-center text-white">Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages