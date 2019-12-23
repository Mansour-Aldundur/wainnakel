import React,{Component} from 'react';
import axios from 'axios';
//! My components 
import NavbarWainnakel from './components/NavbarWainnakel.js';
import MapWainnakel from './components/MapWainnakel.js'; 
import MainPage from './components/MainPage.js'; 
import RestaurantInfo from './components/RestaurantInfo';


//! Styles 
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/NavbarWainnakel.css'; 
import './Styles/MapWainnakelStyle.css'; 
import './Styles/MainPageStyle.css';
import {Button}  from 'react-bootstrap';
import {AnimatedLogo} from './img/animated-logo.svg'; 

class App extends Component{
    constructor (props){
    super(props);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleSuggestButton = this.handleSuggestButton.bind(this);
    this.state={
      buttonClicked: false, // indicates the first click of suggest button
      suggestButton:false,
      loading: true,
      lat: null, // latitude of the user from the browser 
      lng: null,
      id: null , 
      name: '',//done
      link: '', // done
      cat: '', // done
      rating: '', // done
      restlat: '',
      restlon: '',
    }
    }
  // Controlling the retrival when clicking the button suggest
  handleNextPage(){
    this.setState({buttonClicked:true});

  }

  
  handleSuggestButton(){
    this.setState({suggestButton:true});
    this.fetchData();
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    if (navigator.geolocation){
      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        var th = this;
        this.serverRequest =
          axios.get('https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid='+latitude+','+longitude+'&get_param=value')
            .then(result => {
              th.setState({
                lat:latitude,
                lng:longitude,
                loading:false,
                id:result.data.id,
                name: result.data.name,//done
                link: result.data.link, // done
                cat: result.data.cat, // done
                rating: result.data.rating, // done
                restlat: result.data.lat,
                restlon: result.data.lon,
              });
            })
          .catch(err => {
            this.setState({
              loading: false,
              error: err
            });
          });
      };
      function error() {
        console.log( 'geolocation error' )
      };
      navigator.geolocation.getCurrentPosition(success.bind(this), error);
     }
  }
 


   render() {  
     let showNext1 ; 
     let showNext2 ; 
     let hide = <MainPage /> ; 
     let nextSuggestion ;
     let suggestButton =  <Button onClick={this.handleNextPage} variant='primary' size='lg' className='ourButton'>اقترح</Button>; 
     let restInfoCalling ; 

    if(this.state.buttonClicked){
       showNext1= <NavbarWainnakel/> ;
       showNext2=<RestaurantInfo id ={this.state.id} latitude={this.state.lat} longitude={this.state.lng} restName={this.state.name} restCat={this.state.cat} restlat={this.state.restlat} restlon={this.state.restlon} restrating= {this.state.rating} restLink={this.state.link} />;
       hide = null; 
       nextSuggestion= <Button onClick={this.handleSuggestButton} variant='primary' size='lg' className='ourButton'>اقتراح آخر</Button>;
       suggestButton=null; 
     }
   

    return (
       <div className="App">
          {this.state.loading ?
          (
           <img src={AnimatedLogo}/>
          ):
          (
            <div>
            <MapWainnakel latitude={this.state.lat} longitude={this.state.lng} restlat={this.state.restlat} restlon={this.state.restlon} suggestButton={this.state.suggestButton} buttonClicked={this.state.buttonClicked}/>
            {showNext1}
            {showNext2}
            {hide}
            {suggestButton}
            {nextSuggestion}
           
            </div>
          )
        } 
         

      </div>
    )
  }
}

export default App;
