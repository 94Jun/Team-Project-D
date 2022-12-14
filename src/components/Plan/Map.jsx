import { Loader } from '@googlemaps/js-api-loader';


const Map = () => {

  const apiOptions = {
    apiKey: "AIzaSyA6OrenYAlZUEIfy_7PIFEwL4sRxu2cV64"}
    const loader = new Loader(apiOptions);
  loader.load().then(() => {
   console.log('Maps JS API loaded');
 });

  const displayMap=() => {
    const mapOptions = {
      center: { lat: -33.860664, lng: 151.208138 },
      zoom: 14
    };
  }

  return ( 
    <div>

      <div> 구글 지도 </div>
<button onClick={displayMap}> </button>    </div>
   );
}
 
export default Map;