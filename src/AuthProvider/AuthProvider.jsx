import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "./../firebase";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLodding, setUserLodding] = useState(true);

  // create user
  const crateUser = (email, password) => {
    setUserLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const LoginUser = (email, password) => {
    setUserLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const LogOutUser = () => {
    return signOut(auth);
  };

  //update User
  const updateUser = (updateInfo) => {
    setUserLodding(true);
    return updateProfile(auth.currentUser, updateInfo);
  };
  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLodding(fasle);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const AuthData = {
    user,
    setUser,
    crateUser,
    LoginUser,
    LogOutUser,
    updateUser,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
}

export default AuthProvider;
