import React from 'react';
import { Route } from 'react-router-dom';
import { Showcase } from './pages/home.jsx';
import { Routes } from 'react-router-dom';
import { Navbar } from './layout/navbar.jsx';

function App() {

  return (
    <div>
   <Routes>
   <Route path="/" element={<Navbar/>}>
   <Route index element={<Showcase/>} />
   {/* <Route path="/lost" element={<LostItems />} /> */}
   {/* <Route path="/found" element={<FoundItems />} /> */}
   </Route>
   </Routes>
    </div>
  )
}

export default App
