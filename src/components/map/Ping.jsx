import React from "react";
import { Marker , useMap } from "react-map-gl";

const Ping = ({longitude, latitude}) => {

  return (
    <Marker longitude={longitude} latitude={latitude}>
        
      <svg className='w-5 h-auto fill-red-600'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.9 97.9"
      fill="#941919">
      <circle cx="49" cy="49" r="20" />
    </svg>
        </Marker>
  );
};

export default Ping;