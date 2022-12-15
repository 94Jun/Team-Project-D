

const Map = () => {

function displayMap() {
  const mapOptions = {
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14
  };
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, mapOptions);
  return map;
}

  return ( 
    <div>

      <div> 구글 지도 </div>
      <div  id="map"> </div>
<button onClick={displayMap()}> </button>    </div>
   );
}
 
export default Map;