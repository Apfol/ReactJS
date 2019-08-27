import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    gog: "day-fog",
};

const WeatherTemperature = (props) => {
    return (
        <div>
            {getWeatherIcon(props.weatherState)}
            <span>{`${props.temperature} C°`}</span>
        </div>
    );
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon) {
        return <WeatherIcons name={icon} size="2x"/>
    } else {
        return <WeatherIcons name="day-sunny" size="2x"/>
    }
}

export default WeatherTemperature;