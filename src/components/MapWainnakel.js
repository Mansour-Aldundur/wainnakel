import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuc292aWM5IiwiYSI6ImNrNGJhNGJjazBidXkzZnBtZHVmZ3hvN2EifQ.HCz2UaR2qajIElqH3Ojwhw';

class MapWainnakel extends Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 46.675297,
      lat: 24.713552,
      zoom: 14
    };
  }

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
    
    map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);
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