import { Navigate, Outlet, useLocation, useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import { useUserStore } from "../../store";
import React, { useEffect } from "react";


interface ProtectedLayoutProps extends React.PropsWithChildren {
  isLoggedIn: boolean
}

export const ProtectedLayout = ({isLoggedIn}: ProtectedLayoutProps) => {
  const context = useOutletContext();
  // const { isLoggedIn } = useUserStore();
  console.log('isLoggedIn:::: ', isLoggedIn);
  const outlet = useOutlet();
  const location = useLocation()
  const navigate = useNavigate();
  // console.log('location: ', location);
  

  // if (!isLoggedIn) {    
  //   return <Navigate to="/login"   />;
  // }

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/login', { replace: true });
  //   }
  // }, [isLoggedIn, navigate]);


  return (
    <>  
    {
      isLoggedIn ? <Outlet context={context} /> : <Navigate to="/login"  replace={true}  /> 
    }   
     {/* <Outlet context={context} /> */}
    </>
  );
}
