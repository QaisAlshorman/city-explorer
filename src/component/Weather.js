import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
 class Weather extends React.Component {
    render() {
        return(
            <aside className="weather-list">
                 <ListGroup id="weather-list">
                 {this.props.seeWeathetState.map((item, indx)=>{
                 return(
                     <div key={indx}>
                           <ListGroup.Item >
                         {<p> wather for day {indx +1} : {item.description}</p>}
                         {<p>date  : {item.date}</p>}
                         </ListGroup.Item>
                         </div>
                 )
                 }
                 )}
                 </ListGroup>
            </aside>
        );
    }
}
export default Weather;