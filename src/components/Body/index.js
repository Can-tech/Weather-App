import React, { useEffect } from 'react'
import waterdrop from '../../images/water-drop.png'
import man from '../../images/man.png'
import main1 from '../../images/main1.png'
import {useTheme} from '../../context/ThemeContext'

function Body() {
    const {theme} = useTheme();
    useEffect(()=>{

    },[theme])
    return (
        <div className={`mt-4 rounded-5 ${(theme==='light' ? 'lightelement' : 'darkelement')}`}>
            <div className="row">
                <div className={`mt-4 mb-4 rounded-4 p-3 col-12 ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}  ><h2>My Weather App</h2> <hr /> </div>
                <div className='col-12 row'>
                    
                    <div className='offset-lg-1 col-lg-4 col-xs-12 rounded-4 pb-4 pt-4 d-flex justify-content-center align-items-center' style={{ rotate: '-20deg', borderBlockColor: '#90B77D' }}>
                        <img src={main1} alt="weather img" height='300em' width='300em' />
                    </div>

                    <div className='col-lg-6 col-xs-12 rounded-4' style={{}}>
                        <h3 className={`mt-3 mb-2 ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}> Watch Weather Any Time !</h3>
                        <ul className='row col-12' style={{ listStyle: 'none' }}>
                            <div className="col-6">
                                <li className={`mt-3 p-2 border border-2 rounded-3 align-items-center d-flex col-12 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ height: '12em' }}><div className='col-12'> <p> <img src={waterdrop} alt="icon" width='32px' height='32px' /></p >What is Lorem Ipsum</div></li>

                            </div>
                            <div className="col-6">
                                <li className={`mt-3 p-2 border border-2 rounded-3 align-items-center d-flex col-12 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ height: '12em' }}><div className='col-12'> <p> <img src={waterdrop} alt="icon" width='32px' height='32px' /></p>industry's standard dummy text ever</div></li>

                            </div>
                            <div className="col-6">
                                <li className={`mt-3 p-2 border border-2 rounded-3 align-items-center d-flex col-12 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ height: '12em' }}><div className='col-12'> <p> <img src={waterdrop} alt="icon" width='32px' height='32px' /></p>Lorem Ipsum is simply dummy text of the printing</div></li>

                            </div>
                            <div className="col-6">
                                <li className={`mt-3 p-2 border border-2 rounded-3 align-items-center d-flex col-12 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ height: '12em' }}><div className='col-12'> <p><img src={waterdrop} alt="icon" width='32px' height='32px' /></p>an unknown printer took a galley of type and scrambled it</div></li>

                            </div>
                        </ul>
                    </div>

                </div>


                <div className='col-12 mt-5' style={{ paddingBottom: '7em', paddingTop: '3em' }}>
                    <div className="row">

                        <div className='offset-lg-1 col-lg-5 col-xs-12' style={{}}>
                            <h3 className={`mt-3 ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}>Login to get more benefits !</h3>
                            <ul className='row align-items-center' style={{ listStyle: 'none' }}>
                                <div className="col-6">
                                    <li className={`mt-3 border border-2 rounded-3 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ padding: '3em' }}><p> <img src={waterdrop} alt="icon" width='32px' height='32px' /></p>Get your personal weather data !</li>

                                </div>
                                <div className="col-6">
                                    <li className={`mt-3 border border-2 rounded-3 ${theme==='light' ? 'textlight border-light' : 'textdark border-dark'}`} style={{ padding: '3em' }}><p> <img src={waterdrop} alt="icon" width='32px' height='32px' /></p>Save the weather of the day !</li>

                                </div>

                            </ul>
                        </div>

                        <div className='col-lg-5 col-xs-12' style={{ rotate: '20deg', borderBlockColor: '#90B77D', marginTop: '-1em' }}>
                            <img src={man} alt="" height='300px' width='300px' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body