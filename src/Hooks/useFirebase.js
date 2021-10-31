import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    handleGoogleLogIn,
    handleLogOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
