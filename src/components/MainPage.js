import React from 'react';
import logo from '../img/LogoPrimery-wainnakel.svg';
import {Button}  from 'react-bootstrap';
function MainPage() {
  return (
    <div className= 'mainContainer'>
    <div className = 'mainBackgorund'>
      <div className = 'mainlogo'> <img src={logo} /> </div>
      <Button onClick={()=>{ alert('alert'); }} variant='primary' size='lg' className='ourButton'>اقترح</Button>
    </div>
    </div>
  );
}

export default MainPage;
