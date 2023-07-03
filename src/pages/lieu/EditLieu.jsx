import React, { useEffect, useRef, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import axiosClient from "../../axios";
import Adminbar from "../../layouts/Adminbar";

const EditLieu = () => {

    const lieu = useParams().lieu;
    const nomRef = useRef();
    const adresseRef = useRef();
    const categorieRef = useRef();
    const descriptionRef = useRef();
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
  

  useEffect(() => {
    getCategories();
    getLieu();
  }, []);

  const getCategories = async () => {
    await axiosClient.get("/categorie").then((res) => {
      setCategories(res.data.categories);
      console.log(categories);
    });
  };

  const getLieu = async () => {
    await axiosClient
      .get(`/lieu/${lieu}`)
      .then((res) => {
        nomRef.current.value = res.data.lieu.nomLieu;
        adresseRef.current.value = res.data.lieu.adresseLieu;
        descriptionRef.current.value = res.data.lieu.descriptionLieu;
        setLongitude(res.data.lieu.longitude);
        setLatitude(res.data.lieu.latitude);
        categorieRef.current.value = res.data.lieu.categorie_id;
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const updateLieu = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nomLieu", nomRef.current.value);
    formData.append("adresseLieu", adresseRef.current.value);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("descriptionLieu", descriptionRef.current.value);
    formData.append("categorie_id", categorieRef.current.value);

    axiosClient
    .put(`lieu/${lieu}`, formData )
    .then(navigate('/lieu'))
    .catch((e) => {
      console.log(e);
    });
    };

  return (
    <div>
      <Adminbar />
      <form
      onSubmit={updateLieu}
      className="p-6 bg-white border border-gray-200 rounded-lg my-5"
    >
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
            Nom du lieu
            </label>
            <input
            type="text"
            ref={nomRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Addresse
          </label>
          <input
            type="text"
            ref={adresseRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
        </div>

        <div className="mb-6 flex gap-8">
            
            <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
                Latitude
            </label>
            <input
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
            </div>
            <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
                Longitude
            </label>
            <input
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
            </div>
        </div>

        <div className="mb-6 flex gap-8 w-full">
            <div className="mb-6 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Description
                </label>
                <textarea name="description" ref={descriptionRef} className="block p-2.5 w-full text-black rounded shadow bg-gray-50 border border-gray-300"/>
            </div>
            <div className="mb-6 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">Catégorie</label>
                <select name="categorie" id="categorie" ref={categorieRef} className='w-full bg-gray-50 border border-gray-300 rounded'>
                    {categories.map((categorie , i) =>{
                        return(
                        <option key={i} value={categorie.id} >{categorie.nomCategorie}</option>
                        );
                        
                    })}
                </select>
            </div>
        </div>

        <div className="flex w-full content-between">
            <div className="w-2/6">
                <button className="inline-flex items-center text-cyan-600 border-cyan-700 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-4 font-medium px-4 py-2 border rounded">
                    Mettre à jour
                </button>
            </div>
            
        <div className="w-2/6">
        <a href="https://www.coordonnees-gps.fr/conversion-coordonnees-gps" target="_blank" className='px-4 py-2 rounded shadow border border-cyan-700 text-cyan-700 hover:text-white font-mono uppercase font-bold hover:bg-cyan-700'> Je ne connais pas mes coordonées gps </a>
        </div>
     </div>
      
    </form>

   
    </div>
    
  );
};

export default EditLieu;