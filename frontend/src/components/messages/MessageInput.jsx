import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return;
    await sendMessage(message);
    setMessage("")
  
}

return (
  <form className="px-4 my-3" onSubmit={handleSubmit}>
    <div className="w-full relative">
      <input type="text"
        className="border text-sm text-wrap rounded-md block w-full p-2.5 opacity-70 bg-gray-600 border-gray-600 text-white"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
        {loading ? <span className="loading loading-spinner"></span> : <IoSendSharp className="text-sky-500 hover:text-sky-700 w-8 h-6" />}
      </button>
    </div>
  </form>
)
}

export default MessageInput