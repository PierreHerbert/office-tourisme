import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout"
import GuestLayout from "./layouts/GuestLayouts"
import Dashboard from "./pages/Dashboard";
import AddCategorie from "./pages/categorie/AddCategorie";
import Categories from "./pages/categorie/Categorie";
import Login from "./pages/Log";
import Home from "./pages/Home";
import EditCategorie from "./pages/categorie/EditCategorie";
import Lieu from "./pages/lieu/Lieu";
import AddLieu from "./pages/lieu/AddLieu";
import EditLieu from "./pages/lieu/EditLieu";

const App = () => {


  return (
    <div>
      <Routes>
        {/* <Route element={<DashboardLayout />} path="/dashboard"> */}
        <Route path="dashboard" element={<Dashboard/>} />
        
            <Route path="categorie" element={<Categories />} />
            <Route path="categorie/add" element={<AddCategorie />} />
            <Route path="categorie/:categorie" element={<EditCategorie />} />

            <Route path="lieu" element={<Lieu />} />
            <Route path="lieu/add" element={<AddLieu />} />
            <Route path="lieu/:lieu" element={<EditLieu />} />
            
          {/* </Route> */}
          {/* <Route element={<GuestLayout />}> */}
            <Route path="/login" element={<Login />} />
          {/* </Route> */}
          
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;