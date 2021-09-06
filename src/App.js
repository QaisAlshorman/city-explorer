import React from 'react';
// import CityForm from './component/CityForm';
// import CityList from './component/CityList';
import axios from 'axios';
// import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locationName: '',
//       locationData: {},
//       showLocationDetail: false,
//       showErrorMessage: false,
//       errorMessage: ''
//     }
//   }
//   getlocationData =(event)=>{
//     event.preventDefult();
//     const cityName =event.target.cityName.value;
//     const myKey = 'pk.3dc8acf744f787ec0f7fb7ecb42dfdd9' ;
//     const URl= `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;

//   }

//   getTheCityName = async (cityName) => {
//     await this.setState({
//       locationName: cityName
//     })
//     console.log(this.state.locationName);
//     this.getData();
//   }

//   getData = async () => {
//     try {

//       let url =`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`
      
//       console.log(process.env.REACT_APP_LOCATION_IQ_KEY);

//       let response = await axios.get(url);
//       console.log(response.data[0]);
//       this.setState({
//         locationData: response.data[0],
//         showLocationDetail: true,
//         showErrorMessage: false,
//         errorMessage: ''
//       });
//     }
//     catch (err) {
      
//       this.setState({
//         showErrorMessage: true,
//         errorMessage: err.message,
//         showLocationDetail: false

//       });
//       console.log(this.state.errorMessage);
//     }
//   }


//   render() {
//     return (
//       <div>
//         {
//           this.state.showErrorMessage &&

//           <Alert variant="danger">
//             {this.state.errorMessage}
//           </Alert>
//         }
//         <CityForm getTheCityName={this.getTheCityName} />
//         {
//           this.state.showLocationDetail &&
//           <CityList locationData={this.state.locationData} />
//         }
//       </div>
//     );
//   }
// }

// export default App;
// import axios from 'axios';
// import React from 'react';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      lat:'',
      lon:'',
      displayName:'',
      mapFlag:false,
      displayErr:false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const myKey = 'pk.3dc8acf744f787ec0f7fb7ecb42dfdd9';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
      lat:resResult.data[0].lat,
        lon:resResult.data[0].lon,
        displayName:resResult.data[0].display_name,
        mapFlag:true
      })
    }
    catch 
    {
      console.log('err');
      this.setState({
        displayErr:true
      })
    }

  }
  
  render(){
    return(
      <>
      
      <h1>Location App</h1>
      <form onSubmit={this.getLocationData}>
        <input type='text' name='cityName' placeholder='Enter city name'/>
        <button type='submit'>Get Location</button>
      </form>

      {/* render the data */}
      <p>Display name : {this.state.displayName}</p>
      <p>Lat : {this.state.lat}</p>
      <p>Lon : {this.state.lon}</p>

      {this.state.mapFlag && 
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.lat},${this.state.lon}`} alt='map' />}

      {this.state.displayErr && <p>Sorry Error</p>}
      

      </>
    )
  }
}

export default App;