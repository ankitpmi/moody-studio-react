import { useUserStore } from "../../store";

export const useLogin = () => {
  const {setIsLoggedIn} = useUserStore()
  const onPressLoginBtn = () => {
    setIsLoggedIn(true)    
  }
  return{onPressLoginBtn}
}