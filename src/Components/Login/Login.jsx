import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {

    const [hidden, setHidden] = useState(true);

  return (
    <div className=" min-h-screen">
      <div className="flex my-auto justify-between items-center gap-4 flex-col lg:flex-row">
        <div className="text-center md:w-1/2 w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 w-full ">
          <form className="card-body">
            <div className="form-control">
                <h2 className="text-4xl font-bold text-[#ff3811]">Login Now!</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidden ? 'password' : 'text'}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="absolute top-[50px] right-5">
                <button onClick={()=>setHidden(!hidden)}>{hidden ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
              </div>
            </div>
            <div className="form-control mt-4">
                <p>New to here? Please <span className="text-blue-600 font-bold underline"><Link to='/signup'>Sign Up!</Link></span></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3811] text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
