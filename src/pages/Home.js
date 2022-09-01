import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import {useTheme} from '../context/ThemeContext'


function Home() {
    const {theme} = useTheme();
    return (
        <div >

            <Header />
            <Body />
            <Footer />

            

        </div>
    )
}

export default Home