import React from 'react';
import City from './component/City';

class App extends React.Component{

  render(){
    return(
      <div >
        <h1 className="header-sec">City Explorer </h1>
        <City
        />
      </div>
    )
  }
}

export default App;