import React,{Component} from 'react';
import { geolocated } from "react-geolocated";

//! My components 
import NavbarWainnakel from './components/NavbarWainnakel.js';
import MapWainnakel from './components/MapWainnakel.js'; 
import MainPage from './components/MainPage.js'; 

import './App.css';
//! Styles 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/NavbarWainnakel.css'; 
import './Styles/MapWainnakelStyle.css'; 
import './Styles/MainPageStyle.css';


class App extends Component{
  state={
    buttonClicked: false , 
    loading: true,
    lat: null,
    lng: null,
   
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ lat: position.coords.latitude, lng: position.coords.longitude , loading:false });
    }, err => console.log(err)
    );
  }
 

   render() {  
    
    return (
       <div className="App">
          {this.state.loading || !this.state.lat || !this.state.lng ? 
          (
            <div> loading .. </div> 
          ):
          (
            <MapWainnakel latitude={this.state.lat} longitude={this.state.lng}/>
          )
        }
          
          <MainPage buttonClicked= {this.state.buttonClicked}/>

      </div>
    )
  }
}

export default App;
