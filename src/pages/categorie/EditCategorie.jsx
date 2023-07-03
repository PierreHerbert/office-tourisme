import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axios";
import Adminbar from "../../layouts/Adminbar";

const EditCategorie = () => {
  const categorie = useParams().categorie;
  const navigate = useNavigate();
  const nomRef = useRef();

  useEffect(() => {
    getCategorie();
  }, []);

  const getCategorie = async () => {
    await axiosClient
      .get(`/categorie/${categorie}`)
      .then((res) => {
        nomRef.current.value = res.data.categorie.nomCategorie;
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const updateCategorie = async (e) => {
    e.preventDefault();

    await axiosClient.put(`/categorie/${categorie}`, {nom: nomRef.current.value}).then(
        navigate('/categorie')
    )
  }

  return (
    <div>
      <Adminbar />
      <form
      className="p-6 bg-white border border-gray-200 rounded-lg my-5"
      onSubmit={updateCategorie}
    >
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Nom
        </label>
        <input
          type="text"
          name="nom"
          ref={nomRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        />
      </div>

      <button className="inline-flex items-center text-cyan-600 border-cyan-700 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-4 font-medium px-4 py-2 border rounded">
         Metre à jour
      </button>
    </form>
    </div>
    
  );
};

export default EditCategorie;