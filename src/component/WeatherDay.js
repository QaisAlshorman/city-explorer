  
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
class WeatherDay extends React.Component {
  render() {
    return (
      <aside className="weather-list">
        <ListGroup id="weather-list">
      {this.props.descWeather.map((item, indx) => {
            return (
              <div key={indx}>

                <ListGroup.Item style={{backgroundColor:'#2422'}} horizontal>
               <h5>📅 date : {item.date} </h5>   
               <p> 🌤️ day {indx + 1} : {item.description} </p>
                </ListGroup.Item >
              </div>
            );
          })} 

        </ListGroup>
      </aside>
    );
  }
}
export default WeatherDay;