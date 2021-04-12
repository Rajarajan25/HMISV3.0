import React, { useEffect, useRef, useState } from "react";

const GPlace = () => {
  const placeInputRef = useRef(null);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    initPlaceAPI();
  }, []);

  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current);
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let addressObject = autocomplete.getPlace();
      let address = addressObject.address_components
      localStorage.setItem("Address",addressObject.formatted_address)
      localStorage.setItem("street",`${address[0].long_name} ${address[1].long_name}`)
      localStorage.setItem("city",address[4].long_name)
      localStorage.setItem("state",address[5].long_name)
      localStorage.setItem("zipcode",address[7].long_name)
      //localStorage.setItem("street",`${address[0].long_name} ${address[1].long_name}`)
      setPlace({
        name: addressObject.name,
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[4].long_name,
      state: address[5].short_name,
      zip_code: address[7].long_name,
      googleMapLink: addressObject.url
      });
    });
  };

  return (
    <>
      {!place?<input type="text" ref={placeInputRef} />:<></>}
       <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div style={{ marginBottom: 10 }}><b>Selected Place</b></div>
        <input
                    placeholder="Your Business Address"
                    type="text"
                    className={`form-control py-5 px-6 `}
                    value={place ||localStorage.getItem("BackFlag")==="Y"?localStorage.getItem("Address"):1}
                    
                  />
        {/* <input type="text" value={place ||localStorage.getItem("BackFlag")==="Y"?localStorage.getItem("street"):1} /> */}
        {/* <input type="text" value={place ||localStorage.getItem("BackFlag")==="Y"?localStorage.getItem("city"):1} />
        <input type="text" value={place ||localStorage.getItem("BackFlag")==="Y"?localStorage.getItem("state"):1} />
        <input type="text" value={place ||localStorage.getItem("BackFlag")==="Y"?localStorage.getItem("zipcode"):1} />
         */}
      
      </div>
    </>
  );
};

export default GPlace;