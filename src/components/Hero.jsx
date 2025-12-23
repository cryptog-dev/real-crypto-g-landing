import React, { useState, useEffect, useContext, useMemo } from "react";
import { ArrowDown, ArrowUp, Clock, Gift, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import LitecoinLogo from "../assets/ltc.svg";
import UsdtLogo from "../assets/usdt.svg";
import EthereumLogo from "../assets/eth.svg";
import SolanaLogo from "../assets/sol.svg";
import XrpLogo from "../assets/xrp.svg";
import BnbLogo from "../assets/bnb.svg";
import DogeLogo from "../assets/doge.svg";

import DayBackground from "../assets/day_bg.webp";
import NightBackground from "../assets/night_bg.webp";

// Snowflake Component
const Snowflake = ({ style }) => (
  <div className="snowflake" style={style}>
    ❄
  </div>
);

// Snow Effect Component
const SnowEffect = ({ isEnabled }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    if (!isEnabled) return;

    // Generate snowflakes with varied properties
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${10 + Math.random() * 15}px`,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setSnowflakes(flakes);
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [showSnow, setShowSnow] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check if Christmas offer is active
  const isChristmasOfferActive = useMemo(() => {
    const now = new Date();
    const offerEndDate = new Date("2025-12-27T23:59:59");
    return now <= offerEndDate;
  }, []);

  // Calculate time remaining for urgency
  const timeRemaining = useMemo(() => {
    if (!isChristmasOfferActive) return null;

    const now = new Date();
    const end = new Date("2025-12-27T23:59:59");
    const diff = end - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { days, hours };
  }, [isChristmasOfferActive]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Disable snow on mobile/small screens
    const checkScreenSize = () => {
      setShowSnow(window.innerWidth >= 768 && !mediaQuery.matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const signals = [
    {
      coin: "ETH/USDT",
      entryPrice: 3450.75,
      targetPrice: 3680.0,
      stopLoss: 3350.0,
      time: currentTime,
    },
    {
      coin: "BTC/USDT",
      entryPrice: 90700.0,
      targetPrice: 94500.0,
      stopLoss: 88900.0,
      time: currentTime,
    },
    {
      coin: "SOL/USDT",
      entryPrice: 188.5,
      targetPrice: 205.0,
      stopLoss: 179.0,
      time: currentTime,
    },
  ];

  const logoPositions = [
    { top: 15, left: 10, size: 40 },
    { top: 25, left: 85, size: 36 },
    { top: 45, left: 5, size: 38 },
    { top: 35, left: 70, size: 42 },
    { top: 65, left: 15, size: 34 },
    { top: 55, left: 90, size: 40 },
    { top: 75, left: 25, size: 36 },
    { top: 85, left: 80, size: 38 },
    { top: 10, left: 40, size: 34 },
    { top: 20, left: 60, size: 36 },
    { top: 40, left: 30, size: 38 },
    { top: 60, left: 45, size: 34 },
    { top: 80, left: 55, size: 40 },
    { top: 30, left: 20, size: 36 },
    { top: 70, left: 75, size: 38 },
  ];

  return (
    <section
      id="hero"
      className="pt-20 md:pt-24 pb-12 md:pb-16 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${darkMode ? NightBackground : DayBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Snow Effect */}
      <SnowEffect isEnabled={showSnow && !prefersReducedMotion} />

      {/* Background overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, rgba(43, 44, 62, 0.3) 0%, rgba(34, 35, 53, 0.5) 100%)"
            : "linear-gradient(135deg, rgba(248, 249, 250, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)",
        }}
      ></div>

      {/* Enhanced background floating & animated crypto logos */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {logoPositions.map((position, index) => {
          const logos = [
            LitecoinLogo,
            EthereumLogo,
            SolanaLogo,
            XrpLogo,
            UsdtLogo,
            BnbLogo,
            DogeLogo,
          ];
          const LogoComponent = logos[index % logos.length];
          const animationClass = `animate-zen-float-${(index % 4) + 1}`;

          return (
            <img
              key={index}
              src={LogoComponent}
              alt="Crypto Logo"
              className={`absolute opacity-90 transition-all duration-300 ease-in-out ${animationClass} filter drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]`}
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                width: `${position.size}px`,
                height: `${position.size}px`,
                animationDuration: `${8 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 4}s`,
                "--initial-rotation": `${Math.random() * 360}deg`,
              }}
            />
          );
        })}
      </div>

      {/* Enhanced keyframes for zen-like floating animations + Christmas effects */}
      <style>
        {`
/* Snow Effect */
.snow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
}

/* Festive gradient text & button backgrounds */
.festive-gradient-text {
  background: linear-gradient(90deg, #ff4d4d 0%, #f59e0b 45%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.festive-gradient-bg {
  background: linear-gradient(135deg, #dc2626 0%, #f59e0b 50%, #059669 100%);
  color: var(--color-neutral-light);
}

.snowflake {
  position: absolute;
  top: -20px;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0af;
  animation: snowfall linear infinite;
  user-select: none;
  pointer-events: none;
}

@keyframes snowfall {
  0% {
    transform: translateY(-20px) translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(50px) rotate(360deg);
    opacity: 0.3;
  }
}

/* Christmas Badge Animations */
@keyframes christmas-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(220, 38, 38, 0.5),
                0 0 20px rgba(220, 38, 38, 0.3),
                0 0 30px rgba(220, 38, 38, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.7),
                0 0 30px rgba(220, 38, 38, 0.5),
                0 0 40px rgba(220, 38, 38, 0.3);
  }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}

@keyframes gift-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.christmas-badge {
  animation: christmas-glow 2s ease-in-out infinite;
}

.sparkle-icon {
  animation: sparkle 2s ease-in-out infinite;
}

.gift-icon {
  animation: gift-bounce 2s ease-in-out infinite;
}

/* CTA Button Effects */
@keyframes christmas-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
  }
}

@keyframes ice-shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes sparkle-burst {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(2) rotate(360deg);
  }
}

.christmas-cta {
  position: relative;
  overflow: hidden;
  animation: christmas-pulse 2s ease-in-out infinite;
  transition: all 0.3s ease;
}

.christmas-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.christmas-cta:hover::before {
  left: 200%;
}

.christmas-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.6),
              0 0 40px rgba(220, 38, 38, 0.4);
}

.christmas-cta:active {
  transform: scale(0.98);
}

.sparkle-particle {
  position: absolute;
  pointer-events: none;
  animation: sparkle-burst 0.6s ease-out forwards;
}

@keyframes card-float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-8px) scale(1.03);
    opacity: 0.97;
  }
}

.animate-card-float {
  animation: card-float 3.5s ease-in-out infinite;
}

@keyframes zen-float-1 {
  0% { 
    transform: translateY(0) translateX(0) rotate(var(--initial-rotation, 0deg)) scale(1);
    opacity: 0.25;
  }
  20% { 
    transform: translateY(-60px) translateX(45px) rotate(calc(var(--initial-rotation, 0deg) + 72deg)) scale(1.4);
    opacity: 0.5;
  }
  40% { 
    transform: translateY(40px) translateX(-50px) rotate(calc(var(--initial-rotation, 0deg) + 144deg)) scale(0.6);
    opacity: 0.6;
  }
  60% { 
    transform: translateY(-45px) translateX(60px) rotate(calc(var(--initial-rotation, 0deg) + 216deg)) scale(1.3);
    opacity: 0.45;
  }
  80% { 
    transform: translateY(55px) translateX(-40px) rotate(calc(var(--initial-rotation, 0deg) + 288deg)) scale(0.8);
    opacity: 0.55;
  }
  100% { 
    transform: translateY(0) translateX(0) rotate(calc(var(--initial-rotation, 0deg) + 360deg)) scale(1);
    opacity: 0.25;
  }
}

@keyframes zen-float-2 {
  0% { 
    transform: translateY(0) translateX(0) rotate(var(--initial-rotation, 0deg)) scale(1);
    opacity: 0.25;
  }
  15% { 
    transform: translateY(50px) translateX(-35px) rotate(calc(var(--initial-rotation, 0deg) - 54deg)) scale(1.35);
    opacity: 0.4;
  }
  35% { 
    transform: translateY(-30px) translateX(65px) rotate(calc(var(--initial-rotation, 0deg) - 108deg)) scale(0.7);
    opacity: 0.55;
  }
  55% { 
    transform: translateY(60px) translateX(-45px) rotate(calc(var(--initial-rotation, 0deg) - 162deg)) scale(1.2);
    opacity: 0.5;
  }
  75% { 
    transform: translateY(-40px) translateX(55px) rotate(calc(var(--initial-rotation, 0deg) - 216deg)) scale(0.9);
    opacity: 0.45;
  }
  90% { 
    transform: translateY(25px) translateX(-30px) rotate(calc(var(--initial-rotation, 0deg) - 270deg)) scale(1.1);
    opacity: 0.35;
  }
  100% { 
    transform: translateY(0) translateX(0) rotate(calc(var(--initial-rotation, 0deg) - 360deg)) scale(1);
    opacity: 0.25;
  }
}

@keyframes zen-float-3 {
  0% { 
    transform: translateY(0) translateX(0) rotate(var(--initial-rotation, 0deg)) scale(1);
    opacity: 0.25;
  }
  12% { 
    transform: translateY(-35px) translateX(-55px) rotate(calc(var(--initial-rotation, 0deg) + 43deg)) scale(1.45);
    opacity: 0.55;
  }
  25% { 
    transform: translateY(45px) translateX(30px) rotate(calc(var(--initial-rotation, 0deg) + 86deg)) scale(0.65);
    opacity: 0.6;
  }
  38% { 
    transform: translateY(-50px) translateX(70px) rotate(calc(var(--initial-rotation, 0deg) + 129deg)) scale(1.25);
    opacity: 0.5;
  }
  50% { 
    transform: translateY(25px) translateX(-60px) rotate(calc(var(--initial-rotation, 0deg) + 172deg)) scale(0.8);
    opacity: 0.58;
  }
  62% { 
    transform: translateY(-40px) translateX(45px) rotate(calc(var(--initial-rotation, 0deg) + 215deg)) scale(1.35);
    opacity: 0.45;
  }
  75% { 
    transform: translateY(55px) translateX(-25px) rotate(calc(var(--initial-rotation, 0deg) + 258deg)) scale(0.75);
    opacity: 0.52;
  }
  88% { 
    transform: translateY(-30px) translateX(50px) rotate(calc(var(--initial-rotation, 0deg) + 301deg)) scale(1.15);
    opacity: 0.4;
  }
  100% { 
    transform: translateY(0) translateX(0) rotate(calc(var(--initial-rotation, 0deg) + 360deg)) scale(1);
    opacity: 0.25;
  }
}

@keyframes zen-float-4 {
  0% { 
    transform: translateY(0) translateX(0) rotate(var(--initial-rotation, 0deg)) scale(1);
    opacity: 0.25;
  }
  25% { 
    transform: translateY(65px) translateX(50px) rotate(calc(var(--initial-rotation, 0deg) - 90deg)) scale(1.5);
    opacity: 0.55;
  }
  50% { 
    transform: translateY(-55px) translateX(-40px) rotate(calc(var(--initial-rotation, 0deg) - 180deg)) scale(0.6);
    opacity: 0.65;
  }
  75% { 
    transform: translateY(35px) translateX(75px) rotate(calc(var(--initial-rotation, 0deg) - 270deg)) scale(1.3);
    opacity: 0.5;
  }
  100% { 
    transform: translateY(0) translateX(0) rotate(calc(var(--initial-rotation, 0deg) - 360deg)) scale(1);
    opacity: 0.25;
  }
}

.animate-zen-float-1 {
  animation: zen-float-1 5s ease-in-out infinite;
}

.animate-zen-float-2 {
  animation: zen-float-2 6s ease-in-out infinite;
}

.animate-zen-float-3 {
  animation: zen-float-3 4s ease-in-out infinite;
}

.animate-zen-float-4 {
  animation: zen-float-4 5.5s ease-in-out infinite;
}

@media (hover: hover) {
  .animate-zen-float-1:hover,
  .animate-zen-float-2:hover,
  .animate-zen-float-3:hover,
  .animate-zen-float-4:hover {
    animation-play-state: paused;
    transform: translateY(0) translateX(0) rotate(180deg) scale(1.3) !important;
    opacity: 0.7 !important;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .christmas-cta,
  .christmas-badge,
  .snowflake,
  .sparkle-icon,
  .gift-icon,
  .animate-card-float {
    animation: none !important;
  }
  
  .christmas-cta:hover {
    transform: none;
  }
}
        `}
      </style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Christmas Offer Badge */}
        {isChristmasOfferActive && (
          <div className="mb-6 flex justify-center">
            <div
              className="christmas-badge inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(185, 28, 28, 0.9) 100%)",
                borderColor: "rgba(254, 202, 202, 0.5)",
                color: "#fff",
              }}
              role="alert"
              aria-live="polite"
            >
              <span className="text-2xl gift-icon" aria-hidden="true">
                🎄
              </span>
              <div className="flex flex-col items-start">
                <span className="font-bold text-sm md:text-base">
                  Christmas Special Offer
                </span>
                {timeRemaining && (
                  <span className="text-xs opacity-90">
                    Ends in {timeRemaining.days}d {timeRemaining.hours}h • Valid
                    till 27th Dec
                  </span>
                )}
              </div>
              <Sparkles className="w-5 h-5 sparkle-icon" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="festive-gradient-text">Premium </span>
          <span className="festive-gradient-text">Crypto</span>
          <span className="festive-gradient-text"> Signals</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Join the fastest-growing crypto trading community. Accurate signals,
          real profits, zero fluff.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => {
              document
                .getElementById("plans")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-6 py-3 rounded-md font-medium transition-all text-center cursor-pointer lego-button flex items-center justify-center gap-2 ${
              isChristmasOfferActive ? "christmas-cta festive-gradient-bg" : ""
            }`}
            style={{
              color: "var(--color-neutral-light)",
              borderColor: "var(--color-border-dark)",
            }}
            aria-label={
              isChristmasOfferActive
                ? "Join Premium Group - Christmas Offer"
                : "Join Premium Group"
            }
          >
            {isChristmasOfferActive && (
              <Gift className="w-5 h-5" aria-hidden="true" />
            )}
            <span>
              Join Premium Group
              {isChristmasOfferActive && (
                <span className="hidden sm:inline"> – Christmas Offer</span>
              )}
            </span>
          </button>
          <a
            href="https://chat.whatsapp.com/Bpbzs4D8XAkHGm38CLbN3l"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg text-center lego-button hover:scale-105 festive-gradient-bg"
            style={{
              color: "var(--color-neutral-light)",
              borderColor: "var(--color-border-dark)",
            }}
          >
            Try Free Channel
          </a>
        </div>

        {/* Learn More link */}
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="flex justify-center items-center mt-8 cursor-pointer transition-colors animate-pulse"
          style={{ color: "var(--color-text-secondary)" }}
          onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
          onMouseLeave={(e) =>
            (e.target.style.color = "var(--color-text-secondary)")
          }
          aria-label="Learn more about our features"
        >
          <span className="mr-2">Learn More</span>
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
