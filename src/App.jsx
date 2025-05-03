import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HowToUsePlanWise from "./components/HowToUsePlanWIse";
import GetTheApp from "./components/GetTheApp";
import About from "./components/About";


export default function App(){
  return(
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/GetTheApp" element={<GetTheApp/>}/>
      <Route path="/HowToUsePlanWise" element={<HowToUsePlanWise/>}/>
    </Routes>
  </div>
  )
}
