/* eslint-disable no-unused-vars */
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import Home from './pages/home/Home'
import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';


const App = () => {
  const{authUser} = useAuthContext()
  return (
    <div className="custom-bg bg-no-repeat bg-cover bg-center bg-fixed p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={authUser ? <Navigate to="/"/> :<Login/>} />
        <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
