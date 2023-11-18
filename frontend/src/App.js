import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome/welcome';
import Login from './Login/login';
import StartScreen from './StartScreen/StartScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/welcome' element={<StartScreen />} />
    </Routes>
   // <Welcome />

  // <Login />

  );
}

export default App;
