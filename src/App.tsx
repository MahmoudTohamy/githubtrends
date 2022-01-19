/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Containers/HomePage/HomePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/developer' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
