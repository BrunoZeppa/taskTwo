import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useHook = () =>{

    const [data, setData] = useState({});

    useEffect(() =>{

        const success = pos =>{
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c9a91cef86b44ac388887aca73643a2`)
            .then(res => setData(res.data));
        }
        navigator.geolocation.getCurrentPosition(success);
    },[]);

   let city = data.name
   let country = data.sys?.country
   let temperature = Math.round(data.main?.temp -273.15)
   let windSpeed = data.wind?.speed
   let clouds = data.clouds?.all
   let pressure = data.main?.pressure
   let weatherDescription = data.weather?.[0].description
   let icon = data.weather?.[0].icon
  

    console.log(data);
    console.log(icon);

    return {city, country, temperature, windSpeed, clouds, pressure, weatherDescription, icon};
}

export default useHook
