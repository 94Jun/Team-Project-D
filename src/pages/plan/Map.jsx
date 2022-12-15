import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const [enteredSearch, setEnteredSearch] = useState('')
  const changeSearchHandler = (e) => { 
    setEnteredSearch(e.target.value)
  }
  const onLoad = () => { 
    return enteredSearch
  }
  const onPlaceChanged = () => { 
    
  }
  console.log(enteredSearch)
  return (
    <LoadScript googleMapsApiKey="AIzaSyA6OrenYAlZUEIfy_7PIFEwL4sRxu2cV64" libraries={["places"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
            }}
            onChange={changeSearchHandler}
          / >
          </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
