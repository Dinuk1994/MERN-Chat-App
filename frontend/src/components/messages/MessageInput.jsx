import { IoSendSharp } from "react-icons/io5";
const MessageInput = () => {
  return (
    <div className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" 
            className="border text-sm text-wrap rounded-md block w-full p-2.5 opacity-70 bg-gray-600 border-gray-600 text-white"
            placeholder="Type here"/>
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <IoSendSharp className="text-sky-500 hover:text-sky-700 w-8 h-6"/>
            </button>
        </div>
    </div>
  )
}

export default MessageInput