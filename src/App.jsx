import { useState } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
