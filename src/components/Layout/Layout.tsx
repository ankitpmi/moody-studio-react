import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <div className="bg-white">
      <Header />      
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
