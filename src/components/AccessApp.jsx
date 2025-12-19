import React, { useState, useEffect, useRef, useContext } from "react";
import { BookOpen, BarChart3, Signal, Receipt, ArrowRight } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AppScreenshotDay from "../assets/app-screenshot.png";
import AppScreenshotNight from "../assets/app-screenshot-n.png";

const AccessApp = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education Content",
      description:
        "Comprehensive trading guides, market analysis tutorials, and expert insights to level up your crypto knowledge.",
      color: "var(--color-primary)",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Management & Analytics",
      description:
        "Track your trading performance with detailed analytics, profit/loss reports, and portfolio insights.",
      color: "var(--color-accent1)",
    },
    {
      icon: <Signal className="h-8 w-8" />,
      title: "Premium Trades/Signal Access",
      description:
        "Get instant access to premium trading signals with real-time alerts, entry/exit points, and risk management.",
      color: "var(--color-accent2)",
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Crypto Tax Support",
      description:
        "Simplify tax reporting with automated transaction tracking, tax calculations, and export-ready reports.",
      color: "var(--color-secondary)",
    },
  ];

  return (
    <section
      id="access-app"
      ref={sectionRef}
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-light)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            backgroundColor: "var(--color-primary)",
            animation: "float-1 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            backgroundColor: "var(--color-accent2)",
            animation: "float-2 10s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-scale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float-1 {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(15px);
            }
          }

          @keyframes float-2 {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(20px) translateX(-15px);
            }
          }

          @keyframes screenshot-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(1deg);
            }
            50% {
              transform: translateY(-12px) rotate(0deg);
            }
            75% {
              transform: translateY(-8px) rotate(-1deg);
            }
          }

          @keyframes screenshot-glow {
            0%, 100% {
              opacity: 0.4;
              filter: blur(20px);
            }
            50% {
              opacity: 0.6;
              filter: blur(25px);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }

          .animate-fade-in-scale {
            animation: fade-in-scale 0.8s ease-out forwards;
          }

          .screenshot-animated {
            animation: screenshot-float 6s ease-in-out infinite;
          }

          .screenshot-glow {
            animation: screenshot-glow 3s ease-in-out infinite;
          }

          .feature-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .feature-card:hover {
            transform: translateY(-4px);
          }

          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.15s; }
          .stagger-3 { animation-delay: 0.2s; }
          .stagger-4 { animation-delay: 0.25s; }
          .stagger-5 { animation-delay: 0.3s; }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div
          className={`text-center mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span style={{ color: "var(--color-text-primary)" }}>
              Access Our{" "}
            </span>
            <span style={{ color: "var(--color-primary)" }}>Premium</span>
            <span style={{ color: "var(--color-accent2)" }}> App</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Everything you need to master crypto trading, all in one powerful
            mobile application.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* App Screenshot */}
          <div
            className={`app-image-container ${
              isVisible ? "animate-fade-in-scale stagger-1" : "opacity-0"
            }`}
            style={!isVisible ? { opacity: 0 } : {}}
          >
            <div className="relative">
              {/* Animated Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl screenshot-glow"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary), var(--color-accent2))`,
                }}
              ></div>
              {/* Image container with animation */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl lego-card screenshot-animated"
                style={{
                  borderColor: "var(--color-border-light)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <img
                  src={darkMode ? AppScreenshotNight : AppScreenshotDay}
                  alt="Real Crypto G App Dashboard"
                  className="w-full h-auto object-contain"
                  style={{
                    display: "block",
                  }}
                />
              </div>
            </div>
            {/* CTA Button */}
            <div
              className={`text-center mt-6 ${
                isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"
              }`}
              style={!isVisible ? { opacity: 0 } : {}}
            >
              <a
                href="https://signals.therealcryptog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 lego-button"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-neutral-light)",
                  borderColor: "var(--color-border-dark)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-accent2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-primary)";
                }}
              >
                <span>Access App Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const staggerClass = `stagger-${index + 2}`;
              return (
                <div
                  key={index}
                  className={`feature-card p-4 rounded-xl backdrop-blur-xl lego-card ${
                    isVisible
                      ? `animate-fade-in-up ${staggerClass}`
                      : "opacity-0"
                  }`}
                  style={{
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--card-shadow)",
                    ...(isVisible ? {} : { opacity: 0 }),
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-card-hover)",
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-semibold mb-1"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessApp;
