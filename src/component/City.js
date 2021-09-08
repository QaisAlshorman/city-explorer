import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Movies from "./Movies";

import { Form, Button, Image, Row, Col } from "react-bootstrap";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locData: "",
      wheatherState: [],
      movies: [],
      errMsg: "",
      displayErrMsg: false,
      displayMap: false,
    };
  }
  getLocation = async (event) => {
    event.preventDefault();

    try {
      let searchQuery = event.target.searchQuery.value;
      let locURL = `https://eu1.locationiq.com/v1/search.php?key=pk.30819d0d14daf4a98f432c25d296412a&q=${searchQuery}&format=json`;
      let locResult = await axios.get(locURL);
      let WeatherUrl = `https://weather-cityexplorer55.herokuapp.com/forcast?lat=${locResult.data[0].lat}&lon=${locResult.data[0].lon}`;
      // http://localhost:3060/forcast?lat=${locResult.data[0].lat}&lon=${locResult.data[0].lon}
      let movieUrl = `https://weather-cityexplorer55.herokuapp.com/movies?cityName=${searchQuery}`;

      let weatherObject = await axios.get(WeatherUrl);
      let moviesName =await axios.get(movieUrl);
      console.log(locResult.data);
      // console.log(locResult.data[0].lat);
      // console.log(this.state.locData.lon);

      this.setState({
        locData: locResult.data[0],
        displayMap: true,
        wheatherState: weatherObject.data,
        movies :moviesName.data,
      });
      console.log(this.state.movies);
      // console.log(weatherObject.data);
    } catch {
      this.setState({
        errMsg: "OOPS! 404 Error This is a bad Response",
        displayErrMsg: true,
      });
    }
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.getLocation} className="container-sec1">
          <Form.Group controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control
                  className="form-text"
                  type="text"
                  placeholder="city name"
                  name="searchQuery"
                ></Form.Control>
              </Col>
              <Col>
                <Button variant="primary" type="submit" value="search">
                  Explore!
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        
        <div className="container-sec2">
          <p>  {this.state.locData.display_name}</p>
          <p>  {this.state.locData.lat} ,{this.state.locData.lon}</p>
          {this.state.displayErrMsg && this.state.errMsg}
          {this.state.displayMap && (
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.30819d0d14daf4a98f432c25d296412a&center=${this.state.locData.lat},${this.state.locData.lon}&zoom=15&size=480x450&format=png&maptype=roadmap&markers=icon:small-red-cutout|${this.state.locData.lat},${this.state.locData.lon},&markers=icon:small-red-cutout|${this.state.locData.lat},${this.state.locData.lon}`}
              alt="map"
              fluid
              thumbnail
            />
          )}
          <Weather seeWeathetState={this.state.wheatherState} />
      < Movies displayMovies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default City;