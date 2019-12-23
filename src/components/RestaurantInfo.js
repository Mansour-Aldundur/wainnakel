import React, { Component } from 'react';
import '../Styles/RestaurantInfo.css';
import googleMapsIcon from '../img/google.svg';
import galleryIcon from '../img/gallery.svg';
import infoIcon from '../img/round-info-button.svg';
import arrowup from '../img/up-arrow.svg';
import arrowdown from '../img/down-arrow.svg';

class RestaurantInfo extends Component {
    constructor(props) {
        super(props);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.state = {
            collapsed:false ,
            expanded:true , 
        }
    }
    handleCollapse(){
        this.setState({collapsed:true,expanded:false}); 
    }
    handleExpand(){
        this.setState({collapsed:false,expanded:true}); 
    }


    render() {
        
        let googleMapLink = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.props.id;
        // to format the name as in the prototype
        let modifiedName = this.props.restName;
        modifiedName = modifiedName.replace("(", "| "); 
        modifiedName = modifiedName.replace(")", " ");
       
        return (
            <div>
               
        
                <div className='filling'>
                { !this.state.collapsed ?
                    (
                    <div className='bgInfoSection'>
                    <h1 className='restaName'>{modifiedName}</h1>
                    <p className='catogoryAndRating'>{this.props.restCat}-{this.props.restrating}/10</p>
                    <div className='optionsContainer'>
                        <div className='GoogleMaps' onClick={() => window.open(googleMapLink, "_blank")}><img src={googleMapsIcon} className='myIconSize' /></div>

                        <div className='restimages'><img src={galleryIcon} className='myIconSize' /></div>

                        <div className='infoRest' onClick={() => window.open(this.props.restLink, "_blank")}><img src={infoIcon} className='myIconSize' /></div>
                    </div>
                    <div className='collapseOptions' onClick={this.handleCollapse}> <img src={arrowup} className='arrow-up'/> </div>
                    </div>
                    ):
                    (<div className='showOptions' onClick={this.handleExpand}> <img src={arrowdown} className='arrow-down'/> </div>)}
                </div>
                 
            </div>
        );
    }
}

export default RestaurantInfo;
