/* eslint-disable no-unused-vars */
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import Home from './pages/home/Home'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-cover bg-center bg-fixed p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
