import React, { ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

interface LayoutProp {
  children: ReactNode
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
