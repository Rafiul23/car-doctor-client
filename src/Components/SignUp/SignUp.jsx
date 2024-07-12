import { Link } from "react-router-dom";
import signUpImg from "../../assets/images/login/login.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {

    const [hidden, setHidden] = useState(true);

    const handleSignUp = e =>{
        e.preventdefault();
    }

  return (
    <div className=" min-h-screen">
      <div className="flex my-auto justify-between items-center gap-4 flex-col lg:flex-row">
        <div className="text-center md:w-1/2 w-full">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 w-full ">
        
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
                <h2 className="text-4xl text-center font-bold text-[#ff3811]">Sign up Now!</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidden ? 'password' : 'text'}
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            
            <div className="form-control text-center mt-4">
                <p>Already have an account? Please <span className="text-[#ff3811] font-bold underline"><Link to='/login'>Login!</Link></span></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3811] text-white">Sign Up</button>
            </div>
          </form>
          <div className="relative -top-[195px]">
            <div className="absolute right-16">
                <button onClick={()=>setHidden(!hidden)}>{hidden ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;
