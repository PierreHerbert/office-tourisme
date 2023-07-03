import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminbar from "../../layouts/Adminbar";

const AddCategorie = () => {
  const nomRef = useRef();
  const navigate = useNavigate();

  const addCategorie = (e) => {
    e.preventDefault();

    const payload = {
        nom: nomRef.current.value,
      }
      console.log(payload);
      axios.post("http://localhost:8000/api/categorie", payload)
      .then(navigate('/categorie'))
    };

  return (
    <div>
      <Adminbar />
      <form
      className="p-6 bg-white border border-gray-200 rounded-lg my-5"
      onSubmit={addCategorie}
      encType='multipart/form-data'
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
           Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddCategorie;