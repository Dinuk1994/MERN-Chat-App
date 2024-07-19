import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useConversations } from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SerchInput = () => {
    const[search,setSearch] = useState("");

    const{setSelectedConversation} = useConversations();
    const {conversations} = useGetConversations();

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
            return toast.error('Search terms must be 3 characters long');
        }
        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(conversation){
            setSelectedConversation(conversation)
            setSearch('')
        }else toast.error("Contact not found!")
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className="flex item-center gap-2">
                <input type="text" placeholder="Search..." className="input text-white opacity-70 h-10 bg-gray-600 input-bordered rounded-lg"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type="submit" className="btn btn-sm ml-2 btn-circle bg-green-600 hover:bg-green-800 text-white">
                  <IoSearch className="text-xl"/>
                </button>
            </form>
        </div>
    )
}

export default SerchInput