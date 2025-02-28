/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../emoji/emojis';

const Conversations = () => {
 const{loading,conversations}= useGetConversations();
  // console.log("CONVERSATIONS : ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation ,index)=>(
        <Conversation key={conversation._id}
          conversation ={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversation.lenght-1}
        />
      ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
  )
}

export default Conversations