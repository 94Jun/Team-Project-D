import { KeyTwoTone } from '@mui/icons-material';
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import {  useEffect, useState } from 'react';

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

const [lists, setLists] = useState([]);
const [nextId, setNextId] = useState(1);


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
     
    }); 
    return marker;
  }; 
  const markerClicked = (key) => {
    setLocationData(key);
    if (key.placeId == undefined) {
    } else {
    setMarkerPosition([...markerPosition, {
      lat : key.latLng.lat(),
      lng : key.latLng.lng(),
    } ])  
  }}

  useEffect(()=>{
    const pickPlaceName = document.querySelector(
      '.title' )
    const pickPlaceAddress = document.querySelector(
      '.address:last-child div')


      if (pickPlaceName == null || pickPlaceAddress == null || pickPlaceAddress.nextElementSibling == null) {
        return;
      }

    const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
      id: nextId,
      name: pickPlaceName.innerHTML,
      address : pickPlaceAddress.innerHTML + pickPlaceAddress.nextElementSibling.innerHTML,
    });

    setNextId(nextId + 1); 
    setLists(about_lists); 

    console.log(nextId);
    console.log(pickPlaceName.innerHTML);
    console.log(pickPlaceAddress.innerHTML + pickPlaceAddress.nextElementSibling.innerHTML);

  }, [locationData])



  const input_list = lists.map((list) => (
    <button>
    <li
      key={list.id} 
      onDoubleClick={() => removeList(list.id)} 
    > 
      {list.id} : 
      {list.name} :
      {list.address}
    </li></button> 
  ));
  
  //삭제 이벤트 함수
  const removeList = (id) => {
    const about_lists = lists.filter((list) => list.id !== id);
    setLists(about_lists);
  };


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
          markerPosition.map((marker)=>(<Marker name={"Current location"} position={marker} />)) 
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
            
      <div>
      <h4> 내가 선택한 장소  </h4>
      <ul>{input_list}</ul>
      </div>
              <br />
    </div>  );
}
 
export default Map;
