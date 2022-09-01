import React from 'react'
import infodesk from '../../images/information-desk.png'
import {useTheme} from '../../context/ThemeContext'

function About() {
    const {theme} = useTheme();
  return (
    <div>
        <div className={`jumbotron rounded-5 pt-1 pb-5 mt-4 ${theme === 'light' ? 'lightelement' : 'darkelement'}`}>
                <div className={`row ${theme==='light' ? 'headtextlight' : 'headtextdark'}`}>
                    <h2 class="mt-5 mb-4">About the Project</h2>
                    
                        <hr />
                </div>
                <div className='row mt-5'>
                    
                <div className=' offset-lg-1 col-lg-4 col-xs-12  d-flex justify-content-center align-items-center'>
                    <img src={infodesk} width='270px' height='270px' alt="" />
                </div>
                <div className={`offset-lg-1 col-lg-4 col-xs-12 ${theme==='light' ? 'textlight' : 'textdark'}`}>
                    <hr />
                <p class='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg " href="#" role="button">Watch Weathers</a>
                </div>
                </div>
            </div>
    </div>
  )
}

export default About