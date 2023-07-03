import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { useStateContext } from '../contexts/AuthContext';
import axiosClient from "../axios";


const Navbar = () => {

    const navigate = useNavigate();


    // //   Déconnect l'utilisateur
    // const handleLogout = (e) => {
    //   e.preventDefault();
  
    //   axiosClient.post("/logout").then(() => {
    //     setUser({});
    //     setAuthToken(null);
    //     navigate('/')
    //   });
    // };


      return (
        <div className='navbar'>
            <nav className="border-gray-200 bg-slate-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="flex items-center">
                  <img src={logo} className="mr-3 w-14" alt="Logo de la ville des Achards" />
              </a>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
                  <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "block py-2 pl-3 pr-4 text-cyan-700 bg-blue-700 rounded md:bg-transparent" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")}>Accueil</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
  
}

export default Navbar