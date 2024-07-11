import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";

const Navbar = () => {
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
          to="/blog"
        >
          Blog
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
          to="/login"
        >
          Login
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
        <button className="btn btn-outline text-[#FF3811]">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
