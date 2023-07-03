import React, { useEffect, useRef, useState } from "react";
import Navbar from '../layouts/Navbar'
import mapboxgl from 'mapbox-gl'
import AddMap from '../components/map/Map'
import axiosClient from "../axios"
import LieuHome from "../components/lieu/LieuHome";
mapboxgl.accessToken = 'pk.eyJ1IjoicGllcnJlaGVyYmVydDg1IiwiYSI6ImNsYno1aXdqMjB6NXozcHFvbm5uMmhiZDgifQ.KCgVmDlLl47xVUURdvT8Qg'

const Home = () => {

  const [lieux, setLieux] = useState([]);
  const mapRef = useRef(null);

    useEffect(() => {
        displayLieux();
    }, []);

    const displayLieux = async () => {
        await axiosClient.get("http://localhost:8000/api/home").then((res) => {
            setLieux(res.data.lieux);
        });
    };

  return (
    <div>
      <Navbar />
      <div>

        <AddMap markers={lieux.map((lieu ) => {
              return { longitude: lieu.longitude, latitude: lieu.latitude};
            })} mapRef={mapRef}/>
      </div>
      
      <LieuHome lieux={lieux} mapRef={mapRef} />
    </div>
  )
}

export default Home