import * as React from "react";
import { Navbar, Landing, Portfolio, About, Contact } from "components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}
