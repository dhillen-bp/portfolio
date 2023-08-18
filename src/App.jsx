import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Education from "./components/Education";
import Project from "./components/Project";
const base = import.meta.env.VITE_BASE || "/";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="mx-auto mt-20 px-7 py-5 w-full md:px-10 lg:px-32">
        <Routes>
          <Route path={`${base}`} element={<Home />} />
          <Route path={`${base}education`} element={<Education />} />
          <Route path={`${base}project`} element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
