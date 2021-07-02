import React, { useState, useEffect } from 'react';
import GPlace from './GPlace';
import PropTypes from 'prop-types';

// API key of the google map

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBLPQbzm0rf6oDHX0tcNjTQV4QXT5ieyUY&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const LocationSearchInput = (props) => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
    
  }, []);

  return (
    <div className="App">
      {!loadMap ? <div>Loading...</div> : <GPlace callback={props.callback} searchField={props.searchField}/>}
    </div>
  );
}

export default LocationSearchInput;

LocationSearchInput.propTypes={
  searchField:PropTypes.string.isRequired,
  callback:PropTypes.func.isRequired
}