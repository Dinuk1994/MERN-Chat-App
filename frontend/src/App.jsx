import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import './index.css';


const App = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-cover bg-center bg-fixed p-4 h-screen flex items-center justify-center">
      <Signup />
    </div>
  );
}

export default App;
