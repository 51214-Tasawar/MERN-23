import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes } from "react-router-dom";
import Products from "../product";

const App=()=>{
  
  return(
    <>
    <Routes>
      <Route path="/" element={<Auth/>}></Route>
      <Route path="/Index" element={<Index />}></Route>
      <Route path="/products" element={<Products/>}></Route>
    </Routes>
   
   
    </>
  )
}
export default App