import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  constructor(props){
    super(props);
    this.state= ({
      defaultprops:{
        center:{
          lat:this.props.latLng.lat,
          lng:this.props.latLng.lng
        },
        zoom:11,
      }
    })
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height:'78vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.defaultprops.center}
          defaultZoom={this.state.defaultprops.zoom}
        >
          <AnyReactComponent
            lat={this.state.defaultprops.center.lat}
            lng={this.state.defaultprops.center.lng}
            text="Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;