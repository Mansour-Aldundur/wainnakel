import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

//* Adding the Arabic language support to the map 
import { setRTLTextPlugin } from "mapbox-gl";
setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js');


mapboxgl.accessToken = 'pk.eyJ1IjoibWFuc292aWM5IiwiYSI6ImNrNGJhNGJjazBidXkzZnBtZHVmZ3hvN2EifQ.HCz2UaR2qajIElqH3Ojwhw';

class MapWainnakel extends Component {
  
   state = {
      lng:this.props.longitude,
      lat:this.props.latitude ,
      zoom: 14
    };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
}

  render() {
    return (
      <div> 
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default MapWainnakel;