import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Buy from "./components/pages/Buy.jsx";
import Tokenomics from "./components/pages/Tokenomics.jsx";
import Roadmap from "./components/pages/Roadmap.jsx";
 
import "./App.css";

function App() {
  return (
    <>
      <section className="bg-[url('/src/assets/bg.png')] min-h-screen bg-cover bg-center bg-no-repeat flex flex-col flex-nowrap  ">
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/roadmap" element={<Roadmap />} />
          
        </Routes>

      </section>
    </>
  );
}

export default App;
