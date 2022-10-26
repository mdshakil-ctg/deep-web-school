import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div>
         
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">You have to login first to gain our primium services. There are huge amount of content here.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <label className="label">
            <p><small>Don't Have an Account?</small> <Link to='/register' className="label-text-alt link link-hover font-bold">Register Here</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
   );
};

export default Login;