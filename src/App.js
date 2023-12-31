import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import FeedBack from "./Pages/FeedBack/FeedBack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Pages/Terms/Terms";
import NoPage from "./Pages/NoPage/NoPage";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Menu from "./Pages/Menu/Menu";
import Checkout from "./Pages/CheckOut/Checkout";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";

const App = () => {
  return (
    <div style={{ background: "black" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
