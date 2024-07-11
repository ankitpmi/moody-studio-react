import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-red-200">
      <Header />
      <div className="h-full bg-gray-500">{children}</div>
      <Footer />
    </div>
  );
};
