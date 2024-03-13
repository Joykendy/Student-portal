import LoginPage from "./pages/login/login";
import  SignUp from "./pages/sign up/signup"
import './App.css';
import OTPVerification from "./pages/otp/otp";
import SideBar from "./components/sidebar/Sidebar";
import Maindash from "./components/MainDash/Maindash";
function App() {


  return (
    <div className="App">
      <div className="AppGlass">
      <SideBar/>
      <Maindash/>
      </div>
      {/* <LoginPage/> */}
      {/* < SignUp/> */}
     {/* < OTPVerification/> */}
    </div>
  )
}

export default App
