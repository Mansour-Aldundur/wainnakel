import React, { Component } from 'react';
import '../Styles/RestaurantInfo.css';
import googleMapsIcon from '../img/google.svg';
import galleryIcon from '../img/gallery.svg';
import infoIcon from '../img/round-info-button.svg';

class RestaurantInfo extends Component {
    state={
        loading: true,
        error: '',
        name: '',
        id: '',
        link: '',
        cat: '',
        catId: '',
        rating: '',
        lat: '',
        lon: '',
        Ulat: this.props.latitude,
        Ulon: this.props.longitude,
        open: '',
        image: []
    }

    async componentDidMount(){
        const url = 'https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid='+this.state.Ulat+','+this.state.Ulon+'&get_param=value';
        console.log(url);
        const response = await fetch(url); 
        const data = await response.json() ; 
        console.log(data);
        this.setState({name:data.name, cat:data.cat,rating:data.rating , loading:false})

    }
    render() {
        return (
                <div>
                    {this.state.loading|| !this.state.name || !this.state.cat ||!this.state.rating ?
                    (<div>loading</div>):
                    ( 
                    <div className='bgInfoSection'>
                    <h1 className='restaName'>{this.state.name}|</h1>
                    <p className='catogoryAndRating'>{this.state.cat}-{this.state.rating}</p>
                    <div className='optionsContainer'>   
                        <div className='GoogleMaps'><img src={googleMapsIcon} className='myIconSize'/>      |</div>
                      
                        <div className='restimages'><img src={galleryIcon} className='myIconSize' />         |</div>
                      
                        <div className='infoRest'><img src={infoIcon} className='myIconSize' /></div>      
                    </div>
                    <div className='collapseOptions'> </div>
                    </div>
                     )
                    }

                </div>
        );
    }
}

export default RestaurantInfo;
