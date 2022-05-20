import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}

export default App;
