import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodList from "./pages/FoodList";
import FoodDetail from "./pages/FoodDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/food/:id" element={<FoodDetail />} />
    </Routes>
  );
};

export default App;
