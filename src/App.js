import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import "./style.css";
import axios from "axios";
import * as yup from "yup";

function App() {
  const Home = () => {
    return <div className="home-page">hello world</div>;
  };
  const Bags = () => {
    const bags_data = [
      {
        name: "پاشنه بلند",
        img: "logo192.png",
        price: "2 میلیون",
      },
      {
        name: "کیف دستی چرمی",
        img: "logo192.png",
        price: "3.5 میلیون",
      },
      {
        name: "کوله‌پشتی اسپرت",
        img: "logo192.png",
        price: "1.2 میلیون",
      },
      {
        name: "کیف دوشی زنانه",
        img: "logo192.png",
        price: "2.8 میلیون",
      },
      {
        name: "کیف مجلسی براق",
        img: "logo192.png",
        price: "4 میلیون",
      },
      {
        name: "کیف کمری مردانه",
        img: "logo192.png",
        price: "1.6 میلیون",
      },
    ];
    return (
      <div className="bags-page">
        {bags_data.map((e) => {
          return (
            <div className="bags-card">
              <h2>{e.name}</h2>
              <div className="div_img">
                <img src={e.img} />
              </div>
              <h2 style={{color:'black',fontFamily:'tahoma'}}>{e.price}</h2>
            </div>
          );
        })}
      </div>
    );
  };
  const Shoes = () => <h2>کفش مجلسی</h2>;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </>
  );
}
export default App;
