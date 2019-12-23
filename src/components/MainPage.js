import React, {Component} from 'react';
import logo from '../img/LogoPrimery-wainnakel.svg';

class MainPage extends Component {
  render(){
  return (
    <div className= 'mainContainer'>
    <div className = 'mainBackgorund'>
      <div className = 'mainlogo'> <img src={logo} /> </div>
    </div>
    </div>
  );}
}

export default MainPage;

