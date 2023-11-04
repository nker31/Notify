import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignIn from './pages/sign-in-page/SignIn';
import Register from './pages/register-page/Register';

import Donate from './pages/donate/Donate';

function App() {
  return (
    <>
      <Navbar/>
      <Donate/>
      {/* <SignIn/>
      <Register/> */}
    </>
  );
}

export default App;
