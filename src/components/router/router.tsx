import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import Home from "../../features/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeoes" element={<>página dos campeoes</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;