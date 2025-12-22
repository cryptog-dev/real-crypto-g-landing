import React, { useState, useEffect, useContext } from "react";
import { ArrowDown, ArrowUp, Clock, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import LitecoinLogo from "../assets/ltc.svg";
import UsdtLogo from "../assets/usdt.svg";
import EthereumLogo from "../assets/eth.svg";
import SolanaLogo from "../assets/sol.svg";
import XrpLogo from "../assets/xrp.svg";
import BnbLogo from "../assets/bnb.svg";
import DogeLogo from "../assets/doge.svg";

import DayBackground from "../assets/day_bg.jpeg";
import NightBackground from "../assets/night_bg.jpeg";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 60000);

    return () => clearInterval(timer);
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

  // Pre-defined positions for better dispersion and zen-like spacing
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
      {/* Background overlay with Christmas theme */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, rgba(0, 100, 0, 0.15) 50%, rgba(43, 44, 62, 0.3) 100%)"
            : "linear-gradient(135deg, rgba(220, 20, 60, 0.15) 0%, rgba(34, 139, 34, 0.1) 50%, rgba(255, 215, 0, 0.1) 100%)",
        }}
      ></div>

      {/* Christmas Snowflakes Animation */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60 animate-snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 5}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Christmas Ornaments */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const ornaments = ["🎄", "🎁", "🎅", "🦌", "🌟", "⭐"];
          return (
            <div
              key={`ornament-${i}`}
              className="christmas-ornament"
              style={{
                left: `${10 + i * 7}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              {ornaments[i % ornaments.length]}
            </div>
          );
        })}
      </div>

      {/* Christmas Lights */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const colors = [
            "#dc2626",
            "#16a34a",
            "#fbbf24",
            "#ffffff",
            "#3b82f6",
          ];
          return (
            <div
              key={`light-${i}`}
              className="christmas-light"
              style={{
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 4) * 20}%`,
                backgroundColor: colors[i % colors.length],
                boxShadow: `0 0 10px ${colors[i % colors.length]}, 0 0 20px ${
                  colors[i % colors.length]
                }`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}
      </div>
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

      {/* Enhanced keyframes for zen-like floating animations */}
      <style>
        {`
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
          
          @keyframes constellation-pulse {
            0%, 100% { 
              opacity: 0.3;
              stroke-width: 0.8;
            }
            25% { 
              opacity: 0.7;
              stroke-width: 1.2;
            }
            50% { 
              opacity: 0.9;
              stroke-width: 1.5;
            }
            75% { 
              opacity: 0.6;
              stroke-width: 1.1;
            }
          }
          
          @keyframes bridge-pulse {
            0%, 100% { 
              opacity: 0.1;
              stroke-width: 0.3;
            }
            50% { 
              opacity: 0.4;
              stroke-width: 0.6;
            }
          }
          
          .animate-constellation-pulse {
            animation: constellation-pulse 8s ease-in-out infinite;
          }
          
          .animate-bridge-pulse {
            animation: bridge-pulse 12s ease-in-out infinite;
          }
          
          /* Constellation hover effects */
          .constellation-1:hover .animate-constellation-pulse,
          .constellation-2:hover .animate-constellation-pulse,
          .constellation-3:hover .animate-constellation-pulse,
          .constellation-4:hover .animate-constellation-pulse {
            animation-duration: 2s;
            opacity: 1;
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
          
          /* Christmas Snowflake Animation */
          @keyframes snowflake {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
          
          .animate-snowflake {
            animation: snowflake linear infinite;
          }
          
          /* Ice Effect for Buttons */
          .christmas-button-ice {
            position: relative;
            overflow: hidden;
          }
          
          .christmas-button-ice::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              transparent 30%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 70%
            );
            animation: ice-shine 3s infinite;
            pointer-events: none;
          }
          
          .christmas-button-ice::after {
            content: '❄';
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 12px;
            opacity: 0.8;
            animation: ice-sparkle 2s infinite;
          }
          
          @keyframes ice-shine {
            0% {
              transform: translateX(-100%) translateY(-100%) rotate(45deg);
            }
            100% {
              transform: translateX(100%) translateY(100%) rotate(45deg);
            }
          }
          
          @keyframes ice-sparkle {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          
          /* Santa Hat Animation */
          .santa-hat {
            display: inline-block;
            margin-right: 4px;
            animation: santa-bounce 2s ease-in-out infinite;
            font-size: 1.2em;
          }
          
          @keyframes santa-bounce {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-3px) rotate(-5deg);
            }
            75% {
              transform: translateY(-3px) rotate(5deg);
            }
          }
          
          /* Christmas Ornaments Floating */
          @keyframes ornament-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          
          .christmas-ornament {
            position: absolute;
            font-size: 24px;
            animation: ornament-float 4s ease-in-out infinite;
            opacity: 0.7;
            pointer-events: none;
          }
          
          /* Christmas Lights Twinkle */
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          
          .christmas-light {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            animation: twinkle 1.5s ease-in-out infinite;
            pointer-events: none;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Christmas Discount Banner */}
        <div className="mb-8 animate-pulse">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #fbbf24 100%)",
              color: "#ffffff",
              boxShadow:
                "0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(22, 163, 74, 0.3)",
            }}
          >
            <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
            <span className="whitespace-nowrap">
              🎄 Christmas Special:{" "}
              <span className="text-yellow-300">60% OFF</span> Premium Plans! 🎄
            </span>
            <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
          </div>
        </div>

        {/* Headline with Christmas Theme */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
          <span
            className="absolute -left-8 md:-left-12 text-2xl md:text-3xl lg:text-4xl animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            🎁
          </span>
          <span style={{ color: "var(--color-text-primary)" }}>Premium </span>
          <span
            style={{
              color: darkMode ? "#16a34a" : "#dc2626",
              textShadow: "0 0 10px rgba(22, 163, 74, 0.5)",
            }}
          >
            Crypto
          </span>
          <span
            style={{
              color: darkMode ? "#fbbf24" : "#16a34a",
              textShadow: "0 0 10px rgba(251, 191, 36, 0.5)",
            }}
          >
            {" "}
            Signals
          </span>
          <span className="ml-2 text-3xl md:text-4xl lg:text-5xl animate-pulse">
            🎄
          </span>
          <span
            className="absolute -right-8 md:-right-12 text-2xl md:text-3xl lg:text-4xl animate-bounce"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          >
            🦌
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Join the fastest-growing crypto trading community. Accurate signals,
          real profits, zero fluff.
        </p>

        {/* CTA Buttons with Santa Hats and Ice Effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative">
          <a
            href="#plans"
            className="px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg text-center cursor-pointer lego-button christmas-button-ice relative"
            style={{
              background: "var(--color-accent2)",
              color: "var(--color-neutral-light)",
              borderColor: "var(--color-border-dark)",
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("plans")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="santa-hat">🎅</span> Join Premium Group
          </a>
          <a
            href="https://chat.whatsapp.com/Bpbzs4D8XAkHGm38CLbN3l"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg text-center lego-button christmas-button-ice relative"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-neutral-light)",
              borderColor: "var(--color-border-dark)",
            }}
          >
            <span className="santa-hat">🎅</span> Try Free Channel
          </a>
        </div>

        {/* Signal Card - COMMENTED OUT */}
        {/* 
        <div
          className="mx-auto w-full max-w-md 
  backdrop-blur-xl 
  rounded-2xl 
  shadow-lg 
  p-6 
  transform transition-all 
  hover:scale-105 
  animate-card-float lego-card"
          style={{
            borderColor: "var(--color-border-light)",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Latest Signals
            </h3>
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-neutral-light)",
              }}
            >
              Live
            </span>
          </div>

          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {signals.map((sig, index) => {
              const profitPercentage = (
                ((sig.targetPrice - sig.entryPrice) / sig.entryPrice) *
                100
              ).toFixed(2);

              return (
                <div
                  key={sig.coin + index}
                  className="rounded-xl px-3 py-3 flex flex-col gap-2"
                  style={{
                    backgroundColor: "var(--color-card-hover)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "var(--color-border-light)",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {sig.coin}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: "var(--color-accent1)",
                        color: "var(--color-neutral-light)",
                      }}
                    >
                      +{profitPercentage}%
                    </span>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Entry
                    </span>
                    <span style={{ color: "var(--color-text-primary)" }}>
                      ${sig.entryPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Target
                    </span>
                    <span
                      className="flex items-center font-medium"
                      style={{ color: "var(--color-accent1)" }}
                    >
                      ${sig.targetPrice.toFixed(2)}
                      <ArrowUp className="ml-1 h-3 w-3" />
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Stop
                    </span>
                    <span
                      className="flex items-center font-medium"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      ${sig.stopLoss.toFixed(2)}
                      <ArrowDown className="ml-1 h-3 w-3" />
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <span
                      className="text-[10px]"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Updated {sig.time}
                    </span>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-accent1)" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        */}

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
        >
          <span className="mr-2">Learn More</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
