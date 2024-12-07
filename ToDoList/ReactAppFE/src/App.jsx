import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes } from "react-router-dom";
import Products from "../product";
import Homepage from "./Products.jsx/Home";
import ContactUs from "./Products.jsx/ContactUs";
import AboutUs from "./Products.jsx/About";
import Services from "./Products.jsx/Services";

const App=()=>{
  
  return(
    <>
    <Routes>
      <Route path="/" element={<Auth/>}></Route>
      <Route path="/Index" element={<Index />}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/homepage" element={<Homepage/>}></Route>
      <Route path="/contactUs" element={<ContactUs/>}></Route>
      <Route  path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>
   
   
    </>
  )
}
export default App