import './css/App.css';
import Home from './pages/Home';
import About from './pages/About'
import Weather from './pages/Weather'
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import {useTheme} from './context/ThemeContext'
import Login from './pages/Login';


function App() {
  const {theme} = useTheme();
  return ( 
    <div className='' style={theme==='light'? {backgroundColor: '#D2D79F'} : {backgroundColor: '#483838'}}>
      <div className="App container">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />


        </Routes>


      </div>
    </div>
  );
}

export default App;
