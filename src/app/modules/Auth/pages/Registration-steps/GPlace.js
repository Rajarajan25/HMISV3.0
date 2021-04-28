import React, { useEffect, useState } from "react";
import { DevConsoleLog } from "../../../../SiteUtill";

const GPlace = (props) => {
  let autocomplete;
  useEffect(() => {
    initPlaceAPI();
  }, []);

  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let searchField= document.querySelector(props.searchField);
    autocomplete=new window.google.maps.places.Autocomplete(searchField, {
      componentRestrictions: { country: ["in"] },
      fields: ["name","address_components", "geometry","formatted_address","url","business_status"],
    });
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener("place_changed", fillInAddress);
  };

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    DevConsoleLog("place",place);
      let address1 = "";
      let postcode = "";
      let locality="";
      let state="";
      let country="";
        // Get each component of the address from the place details,
        // and then fill-in the corresponding field on the form.
        // place.address_components are google.maps.GeocoderAddressComponent objects
        // which are documented at http://goo.gle/3l5i5Mr
        for (const component of place.address_components) {
          const componentType = component.types[0];

          switch (componentType) {
            case "street_number": {
              address1 = `${component.long_name} ${address1}`;
              break;
            }

            case "route": {
              address1 += component.short_name;
              break;
            }

            case "postal_code": {
              postcode = `${component.long_name}${postcode}`;
              break;
            }

            case "postal_code_suffix": {
              postcode = `${postcode}-${component.long_name}`;
              break;
            }
            case "locality":
              locality = component.long_name;
              break;

            case "administrative_area_level_1": {
              state = component.short_name;
              break;
            }
            case "country":
              country = component.long_name;
              break;
            default:
              country=""
            break;
          }
        }
      
        let selectedPlace={
          fulladdress:place.formatted_address,
          location_name:place.name,
          url:place.url,
          business_status:place.business_status,
          street: address1,
          city: locality,
          state:state,
          zip_code:postcode,
          country:country,
        }
        props.callback(selectedPlace);
  }

  return (
    <></>
  );
};

export default GPlace;