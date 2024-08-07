import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useUserStore } from "../../store";


// interface ProtectedLayoutProps extends React.PropsWithChildren {
  
// }

export const ProtectedLayout = () => {
  const context = useOutletContext();
  const { isLoggedIn } = useUserStore();

  if (!isLoggedIn) {    
    return <Navigate to="/login"   />;
  }

  return(
    <Outlet context={context} />
  )
  
}
