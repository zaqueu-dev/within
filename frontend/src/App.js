import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
