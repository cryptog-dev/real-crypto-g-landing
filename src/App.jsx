import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AccessApp from "./components/AccessApp";
import Features from "./components/Features";
import Plans from "./components/Plans";
import MarketData from "./components/MarketData";
import ChartSection from "./components/ChartSection";
import FAQ from "./components/FAQ";
// import BlogSection from "../components/shared/BlogSection";
import AboutUs from "./components/AboutUs";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div
          className="min-h-screen"
          style={{
            backgroundColor: "var(--color-neutral-light)",
            color: "var(--color-neutral-dark)",
          }}
        >
          <Navbar isAppView={false} />
          <Hero />
          <AccessApp />
          <Features />
          <Plans />
          <MarketData />
          <ChartSection />
          <FAQ />
          {/* <BlogSection /> */}
          <AboutUs />
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
