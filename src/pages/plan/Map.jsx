import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Autocomplete, StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const center = {
  lat: 37.5115557,
  lng: 127.0595261,
};

const Map = () => {
  const [searchBox, setSearchBox] = useState(null);
  const [place, setPlace] = useState();
  const onLoad = (searchBox) => {
    setSearchBox(searchBox);
  };
  console.log(searchBox);
  const onPlacesChanged = () => {
    console.log("places Changed");
  };

  const changeInputHandler = (e) => {
    setPlace(e.target.value);
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyA6OrenYAlZUEIfy_7PIFEwL4sRxu2cV64" libraries={["places"]}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <StandaloneSearchBox onLoad={() => onLoad(place)} onPlacesChanged={onPlacesChanged}>
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
                marginLeft: "-120px",
              }}
              onChange={changeInputHandler}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
      <button> </button>
    </div>
  );
};

export default Map;
