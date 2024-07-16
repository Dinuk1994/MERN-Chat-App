/* eslint-disable no-unused-vars */
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import Home from './pages/home/Home'
import './index.css';


const App = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-cover bg-center bg-fixed p-4 h-screen flex items-center justify-center">
      <Home />
    </div>
  );
}

export default App;
