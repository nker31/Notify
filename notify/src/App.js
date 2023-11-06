import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignIn from './pages/sign-in-page/SignIn';
import Register from './pages/register-page/Register';
import Emergency from './pages/Emergency/emergency'
import EmergencyCard from './components/EmergencyCard';
import Fotterbottom from './components/footerbottom'
import Fotterbottommore from './components/footerbottommore'
function App() {
  return (
    <>
      <Navbar/>
      <Emergency/>
      <Fotterbottom/>
      <Fotterbottommore/>
      {/* <Register/> */}
    </>
  );
}

export default App;
