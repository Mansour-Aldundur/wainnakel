import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { mapMarker } from '../img/marker-icon.svg';
//* Adding the Arabic language support to the map 
import { setRTLTextPlugin, Marker } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js');


mapboxgl.accessToken = 'pk.eyJ1IjoibWFuc292aWM5IiwiYSI6ImNrNGJhNGJjazBidXkzZnBtZHVmZ3hvN2EifQ.HCz2UaR2qajIElqH3Ojwhw';

class MapWainnakel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: 12
    };
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.restlon !== prevProps.restlon || this.props.restlat !== prevProps.restlat) {
      this.createMap(this.props.restlon, this.props.restlat);
    }
  }
  createMap() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.props.restlon, this.props.restlat],
      zoom: this.state.zoom });

    var el = document.createElement('div');
    el.className = 'marker';
    var marker = new mapboxgl.Marker()
      .setLngLat([this.props.restlon, this.props.restlat])
      .addTo(map);


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