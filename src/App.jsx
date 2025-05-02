import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";


export default function App(){
  return(
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </div>
  )
}
