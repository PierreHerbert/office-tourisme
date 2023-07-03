import React, { useEffect, useState } from "react";
import axiosClient from "axios";
import Table from '../../components/Table/Table';
import Adminbar from "../../layouts/Adminbar";
import { NavLink, useNavigate } from 'react-router-dom'


const Categorie = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        displayCategories();
    }, []);

    const displayCategories = async () => {
        await axiosClient.get("http://localhost:8000/api/categorie").then((res) => {
            setCategories(res.data.categories);
        });
    };

    const deleteCategories = async (id) => {
        axiosClient.delete(`http://localhost:8000/api/categorie/${id}`).then(displayCategories);
    };

    const editerCategorie = async (id) =>{
        navigate(`/categorie/${id}`);
    };

    const addcategorie = () => {
        navigate("/categorie/add");
    };


    

    return (
        
        <div>
            <Adminbar />
            <Table mockData={categories} header={[

                {
                    Header: "Nom",
                    accessor: "nomCategorie",
                },
            ]}
            action={true}
            afficherSupprimer={true}
            supprimer={deleteCategories}
            editer={editerCategorie}
            afficherEditer={true} search={true} addLink={addcategorie}/>
        </div>
    );
};

export default Categorie;