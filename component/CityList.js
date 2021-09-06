import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class CityList extends React.Component {

  render(){
    return(
 <div>
<Card className="ListR" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=18&size=700x700&format=png&maptype=roadmap&markers=icon:<icon>|${this.props.locationData.lat},${this.props.locationData.lon}`}/>
  <Card.Body>
    <Card.Title> The City Name : {this.props.locationData.display_name}</Card.Title>
    <Card.Text> The latitude:
    {this.props.locationData.lat}
    </Card.Text>
    <Card.Text> The longitude:
    {this.props.locationData.lon}
    </Card.Text>
  
  </Card.Body>
</Card>
 </div>
    );
  }
}

export default CityList;
