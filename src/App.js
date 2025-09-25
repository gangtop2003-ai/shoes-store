import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import "./style.css";
import axios from "axios";
import * as yup from "yup";

function App() {
  const [sabad, setsabad] = useState([]);
  const Home = () => {
    return <div className="home-page">hello world</div>;
  };
  const Bags = () => {
    return (
      <div className="div_p1">
        <div className="d1" style={{ textAlign: "center" }}>
          <h1 style={{ color: "yellow" }}>کفش مجلسی زنانه</h1>
          <a href="Bags_maj">
            <img src="shoes.jpg" />
          </a>
        </div>
        <div className="d2">
          <h1 style={{ color: "yellow" }}>کفش اسپورت</h1>
          <a href="Bags_sport">
            <img src="sport.jpg" />
          </a>
        </div>
      </div>
    );
  };
  const Notfund = () => {
    return <div className="not"></div>;
  };
  const Bags_maj = () => {
    const bags_data = [
      {
        name: "پاشنه بلند",
        img: "./shoes/s1.jpg",
        price: 1000,
      },
      {
        name: "کیف دستی چرمی",
        img: "./shoes/s2.jpg",
        price: 3500,
      },
      {
        name: "کوله‌پشتی اسپرت",
        img: "./shoes/s3.jpg",
        price: 2000,
      },
      {
        name: "کیف دوشی زنانه",
        img: "./shoes/s4.jpg",
        price: 4000,
      },
      {
        name: "کفش ضثصز",
        img: "./shoes/s5.jpg",
        price: 4200,
      },
      {
        name: "کفش غشی",
        img: "./shoes/s6.jpg",
        price: 1900,
      },
      {
        name: " کفش 7 سانت فقلش",
        img: "./shoes/s2.jpg",
        price: 2899,
      },
      {
        name: "کفش غفسبش",
        img: "./shoes/s5.jpg",
        price: 1700,
      },
      {
        name: "کفش جدید نشریغ",
        img: "./shoes/s1.jpg",
        price: 3000,
      },
      {
        name: "کیف دستی چرمی",
        img: "./shoes/s2.jpg",
        price: 2000,
      },
      {
        name: "کفش 3 سانت نننسب",
        img: "./shoes/s5.jpg",
        price: 1300,
      },
      {
        name: "کفش 5 سانت",
        img: "./shoes/s2.jpg",
        price: 2000,
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
              <h2 style={{ color: "black", fontFamily: "tahoma" }}>
                {e.price}
              </h2>
              <br />
              <button
                onClick={() => {
                  setsabad([...sabad, e]);
                  console.log(sabad);
                }}
              >
                اضافه کردن به سبد خرید
              </button>
            </div>
          );
        })}
      </div>
    );
  };
  const Sabad = () => {
    const [price, setprice] = useState(0);
    useEffect(() => {
      console.log(sabad);
      let m = 0;
      const lk = sabad.map((e) => {
        return e.price;
      });
      console.log(lk);
      for (let i of lk) {
        m += i;
      }
      setprice(m);
    }, [sabad]);

    return (
      <>
        <div className="bags-page">
          {sabad.map((e) => {
            return (
              <div className="bags-card">
                <h2>{e.name}</h2>
                <div className="div_img">
                  <img src={e.img} />
                </div>
                <h2 style={{ color: "black", fontFamily: "tahoma" }}>
                  {e.price}
                </h2>
                <br />
                <button
                  onClick={() => {
                    const qw = structuredClone(sabad);
                    const m = qw.filter((q) => {
                      return e.name !== q.name;
                    });
                    setsabad(m);
                  }}
                >
                  حذف
                </button>
              </div>
            );
          })}
        </div>
        <div className="factor">
          <h1>جمع کل قیمت:{price}</h1>
        </div>
      </>
    );
  };
  const Shoes = () => <h2>کفش مجلسی</h2>;
  return (
    <>
      <Navbar sabad={sabad} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/bags_maj" element={<Bags_maj />} />
        <Route path="*" element={<Notfund />} />
        <Route path="/sabad" element={<Sabad />} />
      </Routes>
    </>
  );
}
export default App;
