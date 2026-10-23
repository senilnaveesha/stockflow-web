import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from "./pages/home/index.jsx";
import Login from "./pages/login.jsx";

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default app