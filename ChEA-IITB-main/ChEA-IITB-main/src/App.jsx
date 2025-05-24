import React from "react";
import Navbaar from "./components/Navbaar";
import Events from "./components/Events";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";



import Contact from "./components/contact";





const App = () =>{
  return (
    <div>
      <Navbaar/>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>

  );

};

export default App;