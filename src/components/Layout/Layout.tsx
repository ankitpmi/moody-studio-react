import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  );
};
