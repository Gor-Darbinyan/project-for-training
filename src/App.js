import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";
import Main from "./components/HomePage/Main";
// import Layout from "./components/Layout";
import LastNewsPage from "./components/LastNewsPage/LastNewsPage";
import LastNewsSinglePage from "./components/LastNewsSinglePage/LastNewsSinglePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="lastNews" element={<LastNewsPage />} />
          <Route path="lastNews/:id" element={<LastNewsSinglePage />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
