import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { useEffect, useState } from 'react';


const containerStyle = {
  width: '800px',
  height: '400px'
};
const autocomplete = null;

const Map = () => {
const [coordinates, setCoordinates] = useState({lat: 35.1621938  , lng:128.9846505});
const [autocomplete, setAutocomplete] = useState(null);

const [locationData,setLocationData]=useState();
const [markerPosition,setMarkerPosition]=useState([{lat: 0  , lng: 0}]);

  const onLoad = (autocomplete) =>{
    setAutocomplete(autocomplete) ;
  }
  const onPlaceChanged =()=> {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(place)
      setCoordinates(()=>({lat: lat , lng: lng} )); 
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  } 
     
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: markerPosition,
      map,
     
    }); console.log(marker)
    return marker;
  }; 

  const markerClicked = (key) => {
    setLocationData(key);
    console.log(locationname);
    setMarkerPosition([...markerPosition, {
      lat : key.latLng.lat(),
      lng : key.latLng.lng(),
      
    }])
  }




  return ( 
    <div>
 <LoadScript
        googleMapsApiKey="AIzaSyA6OrenYAlZUEIfy_7PIFEwL4sRxu2cV64" libraries={["places"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={coordinates}
          center={coordinates}
          zoom={15}
          onChange={onPlaceChanged}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          onClick={markerClicked}
        >
         
         {
          markerPosition.map((marker)=>(<Marker  position={marker} />)) 
           }
        
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



    </div>  );
}
 
export default Map;
