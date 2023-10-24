import React from 'react'
import { Map ,  GoogleApiWrapper} from 'google-map-react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;



const MapContainer = () => {


const defaultProps = {
    center: {
      lat: 36.84367516149979,
      lng: 10.169402120586772
    },
    zoom: 19
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (

    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyCpZK-LJwd9gsBwxZnCBYhXtogDJ1RulVM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // yesIWantToUseGoogleMapApiInternals={true}
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default MapContainer
