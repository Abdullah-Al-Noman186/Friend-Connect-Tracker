import React from 'react';
import logoImg from '../../assets/logo.png';
import { IoHomeOutline, IoTimeOutline, IoBarChartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container ">
      <div className="navbar bg-base-100 shadow-sm flex justify-between items-center px-4 py-2">

        <div className="navbar-start">
          <img src={logoImg} alt="Logo" />
        </div>

        <div className="navbar-center gap-3 flex mr-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1 rounded ${
                isActive ? "bg-green-900 text-white" : ""
              }`
            }
          >
            <IoHomeOutline /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1 rounded ${
                isActive ? "bg-green-900 text-white" : ""
              }`
            }
          >
            <IoTimeOutline /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1 rounded ${
                isActive ? "bg-green-900 text-white" : ""
              }`
            }
          >
            <IoBarChartOutline /> Stats
          </NavLink>

        </div>

      </div>
    </div>
  );
};

export default Navbar;