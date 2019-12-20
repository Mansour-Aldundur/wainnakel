import React,{Component} from 'react';
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
  
   render() {  
    return (
       <div className="App">
          <MapWainnakel />
          <MainPage/>
      </div>
    )
  }
}

export default App;
