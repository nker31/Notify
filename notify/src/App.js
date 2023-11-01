import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignIn from './pages/sign-in-page/SignIn';
import Register from './pages/register-page/Register';
import About from './pages/About-us/about';
import Emergency from './pages/Emergency/emergency'
function App() {
  return (
    <>
      <Navbar/>
      <About/>
      {/* <Register/> */}
    </>
  );
}

export default App;
