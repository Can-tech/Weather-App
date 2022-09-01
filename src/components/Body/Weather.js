import React, { useEffect } from 'react'
import '../../css/weatherPanel.css'
import { useWeather } from '../../context/WeatherContext'
import { useTheme } from '../../context/ThemeContext'
import CityList from '../../turkeyCityList/tr.json'
import flagimg from '../../images/flag.jpg'

function Weather() {
    const { selectedCity, setSelectedCity, weather, setWeather, days} = useWeather();
    const { theme } = useTheme();
    const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";


    onclick = (a) => {

        if (!a.target.classList.contains('activec')) {
            
            
        
            Array.from(document.getElementsByClassName('welement')).map(e => (e.classList.contains('activec')) ? e.classList.remove('activec') : null)

            a.target.classList.add('activec')

        }
    }
    useEffect(()=>{
        fetch(`${BASE_URL}?lat=${(CityList.find((e)=>e.name===selectedCity.name)).latitude}&lon=${CityList.find(((e)=>e.name===selectedCity.name)).longitude}&units=metric&appid=21b6d7f12b94f6db6e3e520f858a9a51`)
        .then(data=>data.json())
        .then(data=>{setWeather(data.list)})
        
        
        
    },[selectedCity, theme])
    


    return (
        <div className={theme === 'light' ? 'lightelement rounded-5' : 'darkelement rounded-5'} >

            <div className="cards-main row " >

                <div className='col-12'>
                    <div className=' offset-5 col-2'>
                        <select className='form-select' value={selectedCity.name} onChange={(e)=>setSelectedCity(CityList.find((listEl)=>listEl.name===e.target.value))}>
                            {
                                CityList.map((e) => (
                                    <option key={e.id} value={e.name}>{e.name}</option>                            

                                ))
                                
                            }
                           
                        </select>
                    </div>
                </div>

                <div className='cards col-12'>
                {weather.map((e,i)=>{
                    if(i%8===0){
                    return( 
                    <div key={i} onClick={onclick} className={`card welement ${i===0 ? 'activec' : ''}`} style={{ background: `url(${flagimg})`}}>
                        <div className='shadow'></div>
                        <div className='label'>
                            <div className='icon row'>
                                
                            <div className='vertictxt col-12 fs-4'>{new Date(e.dt_txt).toLocaleString('default', { month: 'long' })}</div>

                            <div className='col-12 fs-4'>
                            {new Date(e.dt_txt).getDate()}
                            </div>
                            </div>
                            
                            <div className='info'>
                                <div className='today rounded-pill' style={{backgroundColor: '#90B77D'}}>
                                    
                                    <img
                                    className="day-img"
                                    src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                                    alt={e.weather[0].description}
                                    />
                                </div>
                                <div className='title'> {Math.ceil(e.main.temp)}</div>
                                
                                <div className='today'>{days[new Date(e.dt * 1000).getDay()]}</div>
                            </div>
                        </div>
                    </div>)
                    }
                })
}
                   
                   
                   
                   
                   
                   
                   
                   
                    {/* <div onClick={onclick} className='card welement' style={{ background: "url('https://picsum.photos/800/400')" }}>
                        <div className='shadow'></div>
                        <div className='label'>
                            <div className='icon'>
                                Sund
                            </div>
                            <div className='info'>
                                <div className="title">This day</div>
                                <div>sunny</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={onclick} className='card welement' style={{ background: "url('https://picsum.photos/800/400')" }}>
                        <div className='shadow'></div>
                        <div className='label'>
                            <div className='icon'>
                                <ion-icon name="sunny-outline"></ion-icon>
                            </div>
                            <div className='info'>
                                <div className="title">This day</div>
                                <div>sunny</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={onclick} className='card welement' style={{ background: "url('https://picsum.photos/800/400')" }}>
                        <div className='shadow'></div>
                        <div className='label'>
                            <div className='icon'>
                                <ion-icon name="sunny-outline"></ion-icon>
                            </div>
                            <div className='info'>
                                <div className="title">This day</div>
                                <div>sunny</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={onclick} className='card welement' style={{ background: "url('https://picsum.photos/800/400')" }}>
                        <div className='shadow'></div>
                        <div className='label'>
                            <div className='icon'>
                                <ion-icon name="sunny-outline"></ion-icon>
                            </div>
                            <div className='info'>
                                <div className="title">This day</div>
                                <div>sunny</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )


}

export default Weather