import React from "react";
import Header from '../components/Header';
import Navbar from "../components/Navbar";

const Layout = ({children}) =>{
    return(
        <>
          <Header/>
          <Navbar/>
          {children}
        </>
    );
}
export default Layout;