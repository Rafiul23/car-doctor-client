import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

  const {logOut, user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    logOut()
    .then(res =>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User logged out successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    })
    .catch(err =>{
      console.log(err);
    })
  }

  const navlinks = (
    <>
      <li className='ml-5'>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "text-[#FF3811] font-bold underline" : isPending ? "pending" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className='ml-5'>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "text-[#FF3811] font-bold underline" : isPending ? "pending" : "";
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className='ml-5'>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "text-[#FF3811] font-bold underline" : isPending ? "pending" : "";
          }}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      
      <li className='ml-5'>
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "text-[#FF3811] font-bold underline" : isPending ? "pending" : "";
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className='ml-5'>
       <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "text-[#FF3811] font-bold underline" : isPending ? "pending" : "";
          }}
          to="/appointment"
        >
          Appointment
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleLogOut} className="btn btn-outline text-[#FF3811]">Log Out</button> : <Link to='/login'><button className="btn btn-outline text-[#FF3811]">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
