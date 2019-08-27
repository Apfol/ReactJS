import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const icons = {
    sunny: "day-sunny",
    gog: "day-fog",
};

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temperature={20} weatherState={''}/>
            <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
        </div>
    );
};

export default WeatherData;