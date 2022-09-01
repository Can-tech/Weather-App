import { Routes, Route, NavLink } from "react-router-dom";
import React from 'react'
import Home from '../../pages/Home';
import Weather from '../../pages/Weather';
import About from '../../pages/About'
import cloudy from '../../images/cloudy.png';
import '../../css/toggleswitch.css'
import { useTheme } from '../../context/ThemeContext'


function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className={`col-12 rounded-5 ${(theme === 'light' ? 'lightelement' : 'darkelement')}`}>
                <div className="row collapse navbar-collapse" id="nav" >
                    <ul className="navbar-nav justify-content-between col-lg-6 offset-lg-3 col-xs-12 pt-1">
                        <li className="nav-item">
                            <NavLink to='/' style={({ isActive }) => isActive ? (theme === 'light' ? { backgroundColor: '#D2D79F', color: '#ffffff', paddingBottom: '0.9em' } : { backgroundColor: '#483838', color: '#fff', paddingBottom: '0.9em' }) : null} className={`nav-link ${theme === 'light' ? 'headtextlight' : 'headtextdark'}`} aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' style={({ isActive }) => isActive ? (theme === 'light' ? { backgroundColor: '#D2D79F', color: '#ffffff', paddingBottom: '0.9em' } : { backgroundColor: '#483838', color: '#fff', paddingBottom: '0.9em' }) : null} className={`nav-link ${theme === 'light' ? 'headtextlight' : 'headtextdark'}`}>About</NavLink>
                        </li>
                        <li className="nav-item d-none d-xl-block">
                            <img alt='İcon' src={cloudy} width='64' height='64' />
                        </li>
                        <li className="nav-item">
                            <NavLink to='/weather' style={({ isActive }) => isActive ? (theme === 'light' ? { backgroundColor: '#D2D79F', color: '#ffffff', paddingBottom: '0.9em' } : { backgroundColor: '#483838', color: '#fff', paddingBottom: '0.9em' }) : null} className={`nav-link ${theme === 'light' ? 'headtextlight' : 'headtextdark'}`}>Weather</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' style={({ isActive }) => isActive ? (theme === 'light' ? { backgroundColor: '#D2D79F', color: '#ffffff', paddingBottom: '0.9em' } : { backgroundColor: '#483838', color: '#fff', paddingBottom: '0.9em' }) : null} className={`nav-link ${theme === 'light' ? 'headtextlight' : 'headtextdark'}`}>Login</NavLink>
                        </li>
                    </ul>
                    <div className="switchdiv p-2 offset-lg-1 col-lg-1 d-flex justify-content-center align-items-center">
                        <label className="switch ">
                            <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

            </div>
        </nav>

    )
}

export default React.memo(Header)