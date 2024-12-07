import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes } from "react-router-dom";
import Products from "../product";
import Homepage from "./Products.jsx/Home";

const App=()=>{
  
  return(
    <>
    <Routes>
      <Route path="/" element={<Auth/>}></Route>
      <Route path="/Index" element={<Index />}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/homepage" element={<Homepage/>}></Route>
    </Routes>
   
   
    </>
  )
}
export default App