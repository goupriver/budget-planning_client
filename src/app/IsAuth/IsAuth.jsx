import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "services/firebase/config";

export const useIsAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = getAuth(app)

  const [user, setuser] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        setuser(user)
      } else {
        navigate("/welcome");
      }
    });
  }, [pathname, navigate]);

  return  user
};
