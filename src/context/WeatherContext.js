import { createContext, useContext, useState } from "react";
import CitiesData from '../turkeyCityList/tr.json'

    const WeatherContext = createContext();

    export const WeatherProvider = ({children}) => {
        const [selectedCity, setSelectedCity] = useState(
            CitiesData.find((data) => data.name === 'İstanbul')

        );
        
        const [weather, setWeather] = useState([]);

        const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşambe', 'Cuma', 'Cumaertesi'];

        const values = {
            selectedCity,
            setSelectedCity,
            weather,
            setWeather,
            days,
            daysShort
        }
        return(
            <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
        )
        
    }

    export const useWeather = () => useContext(WeatherContext);