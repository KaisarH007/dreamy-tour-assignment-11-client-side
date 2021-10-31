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
import { useHistory, useLocation } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // const history = useHistory();
  // const location = useLocation();
  // const url = location.state?.from || "/home";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      // history.push(url);
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
