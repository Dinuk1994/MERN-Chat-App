import Conversations from "../conversation/Conversations"
import SerchInput from "./SerchInput"


const SideBar = () => {
  return (
    <div  className="border-r-2 border-e-slate-400 p-4 flex flex-col">
       <SerchInput/>
       <div className="divider px-3"></div> 
       <Conversations/>
      
    </div>
  )
}

export default SideBar