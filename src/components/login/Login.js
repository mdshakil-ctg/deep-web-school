import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const {loginWithGoogle, loginWithGithub, signIn} = useContext(AuthContext);

  const [error, setError] = useState(null);

  const handleLogin =(event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;



    signIn(email, password)
    .then(result=>{
      const user = result.user;
      if(user.email){
        navigate(from, {replace:true})
      }
    })
    .catch(error=>{
      setError(error.message)
    })
    
  }

  const googleSignIn = () =>{
    loginWithGoogle()
    .then(result => {
      const user = result.user;
      navigate(from, {replace: true})
    })
    .catch(err => console.log(err))
  }  

   return (
      <div>
         
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">You have to login first to gain our primium services. There are huge amount of content here.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <label className="label">
            <p><small>Don't Have an Account?</small> <Link to='/register' className="label-text-alt link link-hover font-bold">Register Here</Link></p>
          </label>
            <div className='text-danger'>
            {
              error && <p>{error}</p>
            }
            </div>
        </div>
        <div className="mt-0">
          <button  type='submit' className="btn btn-outline-warning w-full">Login</button>
        </div>
        <div className=" mt-0">
          <button onClick={googleSignIn} className="btn btn-outline-warning w-full">Login with google</button>
        </div>
       
        
      </form>
    </div>
  </div>
</div>

      </div>
   );
};

export default Login;