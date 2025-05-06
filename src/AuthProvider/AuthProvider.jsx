import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "./../firebase";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // create user
  const crateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const LogOutUser = () => {
    return signOut(auth);
  };
  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const AuthData = {
    user,
    crateUser,
    LoginUser,
    LogOutUser,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
}

export default AuthProvider;
