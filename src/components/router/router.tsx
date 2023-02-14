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
        <Route path="/table" element={<>página da Tabela</>} />
        <Route path="/rules" element={<>página das Regras </>} />
        <Route path="/about-me" element={<>página do About me</>} />
        <Route path="/participants" element={<>página dos Participantes</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;