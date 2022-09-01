import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useTheme} from '../context/ThemeContext'

function Login() {
    const {theme} = useTheme();
  return (
    <div>
        <Header></Header>

        <div>
            <h2 style={{padding: '5em'}} className={`mt-5 ${theme==='light' ? 'list-footer-element-light' : 'list-footer-element-dark' }`}>Under Maintanence</h2>
        </div>

        <Footer/>
    </div>
  )
}

export default Login