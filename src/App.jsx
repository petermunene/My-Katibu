import React ,{useState,useEffect}from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HowToUsePlanWise from "./components/HowToUsePlanWIse";
import GetTheApp from "./components/GetTheApp";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App(){
  const [cards,setCards]=useState([])
  useEffect(()=>{

    fetch('http://localhost:4000/cards')
    .then((res)=>res.json())
    .then((data)=>setCards(data))
  },[])
  return(
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home cards={cards}/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/GetTheApp" element={<GetTheApp/>}/>
      <Route path="/HowToUsePlanWise" element={<HowToUsePlanWise/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
  </div>
  )
}
