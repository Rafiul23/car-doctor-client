import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [hidden, setHidden] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
       
        const userInfo = { email };
        axios.post('http://localhost:5000/jwt', userInfo, {
          withCredentials: true
        })
        .then(data =>{
          if(data.data.success){
             navigate(location?.state ? location?.state : "/");
          };
        })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className=" min-h-screen">
      <div className="flex my-auto justify-between items-center gap-4 flex-col lg:flex-row">
        <div className="text-center md:w-1/2 w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 w-full ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <h2 className="text-4xl text-center font-bold text-[#ff3811]">
                Login Now!
              </h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidden ? "password" : "text"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control text-center mt-4">
              <p>
                New to here? Please{" "}
                <span className="text-[#ff3811] font-bold underline">
                  <Link to="/signup">Sign Up!</Link>
                </span>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3811] text-white">Login</button>
            </div>
          </form>
          <div className="relative -top-[195px]">
            <div className="absolute right-16">
              <button onClick={() => setHidden(!hidden)}>
                {hidden ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
