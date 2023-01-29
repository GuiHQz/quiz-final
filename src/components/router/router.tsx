import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import Home from "../../features/pages/Home";
import Quiz from "../../features/pages/Quiz";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/campeoes" element={<>página dos campeoes</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;