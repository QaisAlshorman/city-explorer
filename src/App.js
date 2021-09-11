import React from 'react';
import City from './components/City';

class App extends React.Component{

  render(){
    return(
      <div >
        <header style={{backgroundColor:'#2422'}}>
        <h1 className="header-sec" > City Explorer </h1>
        </header>
        <City
        />
      </div>
    )
  }
}

export default App;