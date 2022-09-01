import {Link} from 'react-router-dom'
import React from 'react'
import cloudy from '../../images/cloudy.png';
import {useTheme} from '../../context/ThemeContext'

function Footer() {
    const {theme} = useTheme();

    return (
        <div>
            
            <footer className={`footer-corner py-4 py-md-5 mt-5 ${(theme==='light' ? 'lightelement' : 'darkelement')}`}>
            <hr className=''/>
                <div className="container py-4 py-md-5 px-4 px-md-3">
                    <div className="row">
                        <div className={`col-lg-3 mb-3 text-start offset-lg-1 ${theme==='light' ? 'white' : 'black'}`}>
                                <img src={cloudy} alt="" width='48px' height='48x"px' />
                                <span className="fs-5 head"> My Weather App</span>
                            
                            <ul className="list-unstyled small mt-3">
                                <li className="mb-2 ">"My weather app" is powered by React. <br /> Made for the homework in the <br /> Patika.dev React path.</li>
                                <li className="mb-2">Code licensed MIT</li>
                                <li><a href='https://github.com/Can-tech ' className='text-dark'>Project Github page</a></li>
                            </ul>
                        </div>
                        <div className={`col-6 col-lg-5 offset-lg-1 text-start ${theme==='light' ? 'white' : 'black'}`}>
                            <h5 className='head'>Weather in the Cities</h5>
                            <ul className="list-unstyled row mt-3">
                                <li><Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>İstanbul</Link></li>
                                <li> <Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Ankara</Link></li>
                                <li> <Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>İzmir</Link></li>
                                <li> <Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Bursa</Link></li>
                                <li><Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Adana</Link></li>
                                <li><Link to='/weather' className={`col-4 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Antalya</Link></li>
                            </ul>
                        </div>
                        <div className={`col-6 col-lg-2 text-start ${theme==='light' ? 'white' : 'black'}`}>
                            <h5 className='head'>Navigation</h5>
                            <ul className="list-unstyled mt-3">
                            <li><Link to='/' className={`mb-2 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Home</Link></li>
                            <li><Link to='/about' className={`mb-2 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>About Us</Link></li>
                            <li><Link to='/weather' className={`mb-2 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Weather</Link></li>
                            <li><Link to='/Login' className={`mb-2 list-group-item ${theme==='light'?'list-footer-element-light' : 'list-footer-element-dark'}`}>Login/Signup</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default React.memo(Footer)