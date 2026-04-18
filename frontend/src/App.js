import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import CurrentlyStarring from "./components/CurrentlyStarring";
import Filmography from "./components/Filmography";
import MusicVideos from "./components/MusicVideos";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Press from "./components/Press";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import useReveal from "./hooks/useReveal";
import { Toaster } from "./components/ui/toaster";

function Home() {
  const [loading, setLoading] = useState(true);
  useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll during preloader
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <div className="grain">
      {loading && <Preloader />}
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <CurrentlyStarring />
        <MusicVideos />
        <Filmography />
        <Brands />
        <Gallery />
        <Awards />
        <Press />
        <Connect />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
