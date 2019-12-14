import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from "react-redux";
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
const AnyReactComponent = ({ text,index }) => <>

  <OverlayTrigger
    key={`top`}
    placement='top'
    overlay={
      <Tooltip id={`tooltip-top-${index}`}>
         <strong>{text}</strong>
      </Tooltip>
    }>
    <img height="50px" width="40px" src={require("../../images/mapparkingIcon.png")} />
   </OverlayTrigger>
  </>;
 
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
    var final;
    if(this.props.allListings != null && typeof (this.props.allListings )!= "string" ){
      final = this.props.allListings.map((data, idx) => {
        return (
           <AnyReactComponent key={data._id}
               lat={data.lat}
               lng={data.lng}
               text={data.locationName}
               index={idx}
            />
        )
      });
    }
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height:'78vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.defaultprops.center}
          defaultZoom={this.state.defaultprops.zoom}
          center={this.props.latLng}
        zoom={13}
        >
           {final}
          {/* <AnyReactComponent
            lat={this.props.latLng.lat}
            lng={this.props.latLng.lng}
            text={this.props.latLng.lat}
          /> */}

        </GoogleMapReact>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    latLng: state.mapState.latLng,
    allListings: state.listingState.allListings,
  };
};

export default connect(mapStateToProps)(Map);


