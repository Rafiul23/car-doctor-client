import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex my-auto justify-between items-center gap-4 flex-col lg:flex-row">
        <div className="text-center md:w-1/2 w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 w-full ">
          <form className="card-body">
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
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
