import React, { Component } from 'react';
import '../Styles/RestaurantInfo.css';
import googleMapsIcon from '../img/google.svg';
import galleryIcon from '../img/gallery.svg';
import infoIcon from '../img/round-info-button.svg';

class RestaurantInfo extends Component {
    
    render() { 
       let googleMapLink = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.props.id ; 
       let modifiedName =  this.props.restName; 
       modifiedName =  modifiedName.replace("(","| ");
       modifiedName = modifiedName.replace(")"," ");
        return (
                <div>
                    <div className='bgInfoSection'>
                    <h1 className='restaName'>{modifiedName}</h1>
                    <p className='catogoryAndRating'>{this.props.restCat}-{this.props.restrating}/10</p>
                    <div className='optionsContainer'>   
                        <div className='GoogleMaps' onClick={()=> window.open(googleMapLink , "_blank")}><img src={googleMapsIcon} className='myIconSize'/></div>
                      
                        <div className='restimages'><img src={galleryIcon} className='myIconSize' /></div>
                      
                        <div className='infoRest' onClick={()=> window.open(this.props.restLink, "_blank")}><img src={infoIcon} className='myIconSize' /></div>      
                    </div>
                    <div className='collapseOptions'>  </div>
                    </div>
                </div>
        );
    }
}

export default RestaurantInfo;
