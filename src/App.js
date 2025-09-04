import { useState, useEffect,} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import "./style.css";
import axios from "axios";
import * as yup from "yup";  


function App() {
const Home = () =>{
  return(
    <div className="home-page">hello world</div>
  )
}
const Bags = () => <h2>کیف مجلسی</h2>;
const Shoes = () => <h2>کفش مجلسی</h2>;
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    
    </>
  )
  
}
export default App;
