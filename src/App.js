import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";
import Main from "./components/HomePage/Main";
// import Layout from "./components/Layout";
import LastNewsPage from "./components/LastNewsPage/LastNewsPage";
import LastNewsSinglePage from "./components/LastNewsPage/LastNewsSinglePage";
import LoginPage from "./components/LoginePage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="lastNews" element={<LastNewsPage />} />
          <Route path="lastNews/:id" element={<LastNewsSinglePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
