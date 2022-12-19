import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';


const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 37.5115557,
  lng: 127.0595261
};


const Map = () => {
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autocomplete) =>{
    setAutocomplete(autocomplete)
  }
  console.log(autocomplete)
  const onPlaceChanged =()=> {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace())
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }


  return ( 
    <div>
 <LoadScript
        googleMapsApiKey="AIzaSyA6OrenYAlZUEIfy_7PIFEwL4sRxu2cV64" libraries={["places"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}>
                    <Autocomplete
                    onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="원하는 지역을 선택해주세요"
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
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
        
<button> </button> 
    </div>  );
}
 
export default Map;
