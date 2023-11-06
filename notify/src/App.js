import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignIn from './pages/sign-in-page/SignIn';
import Register from './pages/register-page/Register';
import Home from './pages/home/Home';
import Donate from './pages/donate/Donate';
import Reportadd from './pages/reportadd-page/Reportadd'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Donate/>
      <SignIn/>
      <Register/> */}
    </>
  );
}

export default App;
