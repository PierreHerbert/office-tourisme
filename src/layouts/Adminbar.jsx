import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { useStateContext } from '../contexts/AuthContext';
import axiosClient from "../axios";

const Adminbar = () => {

  // const { setUser, setAuthToken, user, getUser } = useStateContext();
  // const navigate = useNavigate();


  // //   Déconnect l'utilisateur
  // const handleLogout = (e) => {
  //   e.preventDefault();

  //   axiosClient.post("/logout").then(() => {
  //     setUser({});
  //     setAuthToken(null);
  //     navigate('/')
  //   });
  // };

  // useEffect(() => {
  //   if(!user) getUser();
  // }, [])

  return (
    <div className='adminbar'>
      <nav className="border-gray-200 bg-slate-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 w-14" alt="Logo de la ville des Achards" />
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <NavLink to="/" className={(nav) => (nav.isActive ? "block py-2 pl-3 pr-4 text-cyan-600 bg-blue-700 rounded md:bg-transparent" : "block py-2 pl-3 pr-4 text-black ")}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/lieu" className={(nav) => (nav.isActive ? "block py-2 pl-3 pr-4 text-cyan-600 bg-blue-700 rounded md:bg-transparent" : "block py-2 pl-3 pr-4 text-black")}>Lieux</NavLink>
              </li>
              <li>
                <NavLink to="/categorie" className={(nav) => (nav.isActive ? "block py-2 pl-3 pr-4 text-cyan-600 bg-blue-700 rounded md:bg-transparent" : "block py-2 pl-3 pr-4 text-black")}>catégories</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
 
}

export default Adminbar