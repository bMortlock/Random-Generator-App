import logo from './Images/Logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Pokemon from './Pages/Pokemon'
import Digimon from './Pages/Digimon/Digimon'
import FireEmblem from './Pages/FireEmblem';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home />}/>
        <Route exact path="/pokemon"  element={<Pokemon />}/>
        <Route exact path="/digimon"  element={<Digimon />}/>
        <Route exact path="/fireemblem"  element={<FireEmblem />}/>
          
        
      </Routes>
        
        <div classname = "Content">
          
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
