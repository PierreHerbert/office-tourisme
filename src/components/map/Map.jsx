import React , {useState , useEffect} from "react";
import mapboxgl from "mapbox-gl";
import { Map, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Ping from "./Ping";


mapboxgl.accessToken =
  "pk.eyJ1IjoicGllcnJlaGVyYmVydDg1IiwiYSI6ImNsYno1aXdqMjB6NXozcHFvbm5uMmhiZDgifQ.KCgVmDlLl47xVUURdvT8Qg";

const AddMap = ({ markers , mapRef}) => {

 console.log(markers);
  return (
  <>
    <Map
      initialViewState={{
        longitude: -1.660302 ,
        latitude: 46.6,
        zoom: 12.5,
        minZoom: 10,
      }}
      style={{ height: 600}}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"

      ref={mapRef}
    >
      {markers && markers.map((marker, i) => (

        <Ping key={i} longitude={marker.longitude} latitude={marker.latitude} />
      ))}
      
    </Map>
      
    </>

    
  );
};

export default AddMap;