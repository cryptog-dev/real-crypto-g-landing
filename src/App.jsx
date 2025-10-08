import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import MarketData from "./components/MarketData";
import ChartSection from "./components/ChartSection";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar isAppView={false} />
          <Hero />
          <Features />
          <Plans />
          <MarketData />
          <ChartSection />
          <AboutUs />
          <FAQ />
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;