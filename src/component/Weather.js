import React from 'react';
import WeatherDay from "./WeatherDay";
 class Weather extends React.Component {
    render() {
        return(
            <div className="weather-sec">
        <WeatherDay 
        descWeather={this.props.seeWeathetState}/>
        </div>
        );
    }
}
export default Weather;