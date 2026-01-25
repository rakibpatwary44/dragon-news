import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSucrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSucrib();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    userSignIn,
    logOut,
  };

  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
