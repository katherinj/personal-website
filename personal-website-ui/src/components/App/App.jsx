import * as React from "react";
import { MyNavbar, Landing, About, Portfolio } from "components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/connect" element={<About />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}
