import { Routes, Route, NavLink } from "react-router-dom";
import React from 'react'
import Home from '../../pages/Home';
import Weather from '../../pages/Weather';
import About from '../../pages/About'
import cloudy from '../../images/cloudy.png';
import '../../css/toggleswitch.css'
import {useTheme} from '../../context/ThemeContext'


function Header() {
    const {theme, setTheme} = useTheme();
    return (
        
        <div className={`col-12 rounded-5 ${(theme==='light' ? 'lightelement' : 'darkelement')}`}>
            <div className="row">
            <ul className="nav justify-content-between col-6 offset-3 pt-1">
                <li className="nav-item">
                    <NavLink to='/' style={({isActive})=> isActive ? (theme==='light' ? {backgroundColor: '#ffffff', color: '#90B77D', paddingBottom: '0.9em'} : {backgroundColor: '#90B77D', color: '#fff', paddingBottom: '0.9em'}) : null} className={`nav-link ${theme==='light' ? 'headtextlight' : 'headtextdark'}`} aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' style={({isActive})=> isActive ? (theme==='light' ? {backgroundColor: '#ffffff', color: '#90B77D', paddingBottom: '0.9em'} : {backgroundColor: '#90B77D', color: '#fff', paddingBottom: '0.9em'}) : null} className={`nav-link ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}>About</NavLink>
                </li>
                <li className="nav-item">
                    <img alt='İcon' src={cloudy} width='64' height='64' />
                </li>
                <li className="nav-item">
                    <NavLink to='/weather' style={({isActive})=> isActive ? (theme==='light' ? {backgroundColor: '#ffffff', color: '#90B77D', paddingBottom: '0.9em'} : {backgroundColor: '#90B77D', color: '#fff', paddingBottom: '0.9em'}) : null} className={`nav-link ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}>Weather</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/login' style={({isActive})=> isActive ? (theme==='light' ? {backgroundColor: '#ffffff', color: '#90B77D', paddingBottom: '0.9em'} : {backgroundColor: '#90B77D', color: '#fff', paddingBottom: '0.9em'}) : null} className={`nav-link ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}>Login</NavLink>
                </li>
            </ul>
            <div className="switchdiv offset-1 col-1 d-flex justify-content-center align-items-center">
                <label className="switch "> 
                    <input type="checkbox" onChange={()=>setTheme(theme==='light'? 'dark' : 'light')}/>
                    <span className="slider round"></span>
                </label>
            </div>
            </div>

        </div>
        
    )
}

export default React.memo(Header)