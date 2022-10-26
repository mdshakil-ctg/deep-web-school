import { parseAttrSelector } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {

   const {createUser} = useContext(AuthContext)

   const handleRegister = (event) =>{

      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,photo,email, password)

      createUser(email, password)
      .then(result =>{
         const user = result.user;
         console.log(user)
      })
      .catch(err=>console.log(err))

   }



   return (
      <div>
         
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">You have to Register to take an deep look in our services. There are many ways to take you up at register options. Please fill up the form to proceed.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input name='name' type="text" placeholder="Your Full Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name='photo' type="text" placeholder="Your Photo Url" className="input input-bordered" />
        </div>
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
            <p><small>Already Have an Account?</small> <Link to='/login' className="label-text-alt link link-hover font-bold">Login Here</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

      </div>
   );
};

export default Register;