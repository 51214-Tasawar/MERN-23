import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes } from "react-router-dom";
import Products from "../product";
import Homepage from "./Products.jsx/Home";
import ContactUs from "./Products.jsx/ContactUs";
import AboutUs from "./Products.jsx/About";
import Services from "./Products.jsx/Services";
import Create from "./Products.jsx/create";
import Get from "./Products.jsx/get";

const App=()=>{
  
  return(
    <>
    <Routes>
      <Route path="/" element={<Auth/>}></Route>
      <Route path="/Index" element={<Index />}></Route>
      <Route path="/products">
      <Route  element={<Products/>}></Route>
      <Route path="Create-Product" element={<Create/>}></Route>
      <Route path="Get-Products" element={<Get/>}></Route>
      </Route>
      <Route path="/homepage" element={<Homepage/>}></Route>
      <Route path="/contactUs" element={<ContactUs/>}></Route>
      <Route  path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>
   
   
    </>
  )
}
export default App