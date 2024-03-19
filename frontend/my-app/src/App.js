import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import ContactUs from './Routes/ContactUs';
import RulesAndRegulations from './Routes/RulesAndRegulations';
import Login from './components/login/login';
import Register from './components/Register/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<ContactUs/>}/>
        <Route path="/Availability" element={<RulesAndRegulations/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
