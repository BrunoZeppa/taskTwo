import React from 'react';
import useHook from '../useHook';
import { useState } from 'react';
import { useEffect } from 'react';

const AppiWeather = () => {

    const { city, country, temperature, windSpeed, clouds, pressure, weatherDescription, icon } = useHook()

    const [temp, setTemp] = useState([0, " °C"]);
    const [iconUrl, setIcon] = useState('');
    const [background, setBackground] = useState('');

    document.body.style = `background: url(${background}) no-repeat center center fixed;
                           -webkit-background-size: cover;
                           background-size: 100% 100%`;

    useEffect(() => {
        setTemp([(Math.round(temperature * 100) / 100), " °C"])
        changeBackground(icon);
    }, [temperature, icon]);

    const changeTempLecture = () => {
        let value = 0;
        if (temp[1] === " °C") {
            value = temp[0] + 32;
            setTemp([value, " °F"]);
        } else {
            value = temp[0] - 32;
            setTemp([value, " °C"]);
        }
    }

    const changeBackground = (icon) => {
        if (icon) {
            icon = parseInt(icon.slice(0, 2));

            if (icon === 1) {
                setBackground('https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
                setIcon("fas fa-sun")
            } else if ((icon >= 2 && icon <= 4) || icon === 50) {
                setBackground('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80');
                if (icon === 2) {
                    setIcon("fas fa-cloud-sun")
                } else if (icon === 3) {
                    setIcon("fas fa-cloud");
                } else if (icon === 4 || icon === 50) {
                    setIcon("fas fa-cloud");
                }
            } else if (icon >= 9 && icon <= 11) {
                setBackground('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80');
                if (icon === 9) {
                    setIcon("fas fa-cloud-showers-heavy")
                } else if (icon === 10) {
                    setIcon("fas fa-cloud-sun-rain");
                } else if (icon === 11) {
                    setIcon("fas fa-poo-storm");
                }
            } else if (icon === 13) {
                setBackground('https://images.unsplash.com/photo-1612770132420-297b1e77f2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
                setIcon("fas fa-snowflake")
            }
        }
    }


    return (
        <div className='body'>
            <div className='weather-card'>
                <header>
                    <h1>Weather App</h1>
                    <h2>{city}, {country}</h2>
                </header>
                <main>
                    <div>
                        <div className="text-center"><i className={iconUrl + " weather-icon"}></i></div>
                        <p>{temp}</p>
                    </div>
                    <div>
                        <h4>{weatherDescription}</h4>
                        <h3>Wind speed:<span> {windSpeed}</span></h3>
                        <h3>Clouds: <span>{clouds}</span></h3>
                        <h3>Pressure: <span>{pressure}</span></h3></div>
                </main>
                <aside>
                    <div>
                        <button onClick={changeTempLecture}>Degrees °F/°C</button>
                    </div>
                </aside>
            </div>
        </div>

    );
};

export default AppiWeather;
