import { TbLogout2 } from "react-icons/tb";
import  useLogout  from '../../hooks/useLogout';

const LogoutBtn = () => {
  const{loading ,logout } = useLogout();
  return (
    <div className="mt-auto">
     {!loading ? (<TbLogout2 className="text-xl w-8 h-8 hover:text-red-600 text-white" onClick={logout}/>) :(
      <span className="loading-spinner"></span>
     ) }
    </div>
  )
}

export default LogoutBtn