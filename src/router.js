import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Place2Stay from "./pages/Place2Stay/Place2Stay";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/place2stay" element={<Place2Stay />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;