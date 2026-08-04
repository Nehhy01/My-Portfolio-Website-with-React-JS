import { useState } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
