import React, { useEffect, useState } from "react";
import axiosClient from "../../axios";
import Table from '../../components/Table/Table';
import Adminbar from "../../layouts/Adminbar";
import { NavLink, useNavigate } from 'react-router-dom'

const Lieu = () => {

    const navigate = useNavigate();
    const [lieux, setLieux] = useState([]);

    useEffect(() => {
        displayLieux();
    }, []);

    const displayLieux = async () => {
        await axiosClient.get("/lieu").then((res) => {
            setLieux(res.data.lieux);
            console.log(lieux);
        });
    };
    

    const deleteLieu = async (id) => {
        axiosClient.delete(`/lieu/${id}`).then(displayLieux);
    };

    const editerLieu = async (id) =>{
        navigate(`/lieu/${id}`);
    };

    const addLieu = () => {
        navigate("/lieu/add");
    };

    return (
        <div>
            <Adminbar />
            <Table mockData={lieux} header={[

                {
                    Header: "Nom",
                    accessor: "nomLieu",
                },
                {
                    Header: "Adresse",
                    accessor: "adresseLieu",
                },
                {
                    Header: "descriptionLieu",
                    accessor: "descriptionLieu",
                },
                {
                    Header: "Categorie",
                    accessor: "categorie.nomCategorie",
                },
                ]}
                action={true}
                afficherSupprimer={true}
                supprimer={deleteLieu}
                editer={editerLieu}
                afficherEditer={true}
                search={true} addLink={addLieu}/>

                
            
        </div>
    );
};

export default Lieu;