import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md md:max-w-lg p-4 sm:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          Login
          <span className="text-primary"> Chattify</span>
        </h1>

        <form>
          <div className="mt-3 form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full"
            />
          </div>

          <div className="mt-3 form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
          </div>

          <a
            href="#"
            className="text-sm link link-hover mt-4 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-primary btn-block btn-sm mt-3">
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;