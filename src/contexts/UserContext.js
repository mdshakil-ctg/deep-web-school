import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {

   const [user, setUser] = useState({});
   console.log(user);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const loginWithGoogle = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const loginWithGithub = () =>{
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
   }

   const logOut = () =>{
      setLoading(true);
      return signOut(auth);
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currenUser =>{
         setUser(currenUser);
         console.log('state changed user', currenUser)
         setLoading(false);
      })
      return unsubscribe();
   },[])

   const authInfo = {user, createUser, loginWithGoogle, loginWithGithub, logOut};
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;