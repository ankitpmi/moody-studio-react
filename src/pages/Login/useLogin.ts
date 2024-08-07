import { useEffect } from "react";
import { useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useUserStore()
  const onPressLoginBtn = () => {
    setIsLoggedIn(true)    
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }      
  }, [isLoggedIn, navigate])
  

  return{onPressLoginBtn}
}