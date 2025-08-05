import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Showcase } from "./pages/home.jsx";
import { Navbar } from "./layout/navbar.jsx";
import { Login } from "./pages/loginPage.jsx";
import { AddItem } from "./pages/Add.jsx";
import { LostItems } from "./pages/LostItems.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Showcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/lost" element={<LostItems />} />
          {/* <Route path="/found" element={<FoundItems />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
