import React, {Component} from 'react';
import logo from '../img/LogoPrimery-wainnakel.svg';
import {Button}  from 'react-bootstrap';

class MainPage extends Component {
 
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');

  }
  
  render(){


  return (
    <div className= 'mainContainer'>
    <div className = 'mainBackgorund'>
      <div className = 'mainlogo'> <img src={logo} /> </div>
      <Button onClick={this.handleClick} variant='primary' size='lg' className='ourButton'>اقترح</Button>
    </div>
    </div>
  );}
}

export default MainPage;

