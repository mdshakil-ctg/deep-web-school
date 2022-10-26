import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {

   const createUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const loginWithGoogle = () =>{
      return signInWithPopup(auth, googleProvider)
   }

   const loginWithGithub = () =>{
      return signInWithPopup(auth, githubProvider)
   }

   const authInfo = {createUser, loginWithGoogle, loginWithGithub};
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;