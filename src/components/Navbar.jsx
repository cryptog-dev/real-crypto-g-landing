import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { Menu, X, Sun, Moon, User, LogOut, Crown } from "lucide-react";
import Logo from "../assets/logo3.webp";

const Navbar = ({ isAppView = false, activeTab = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { user, logout, isAdmin, isPremium } = useAuth();
  const loginUrl = "https://signals.therealcryptog.com";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Only add scroll listener for landing page
    if (!isAppView) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isAppView]);

  const navLinks = isAppView
    ? isAdmin()
      ? [
          { name: "Dashboard", to: "dashboard", isLink: false },
          { name: "Blogs", to: "blogs", isLink: false },
          { name: "Signals", to: "signals", isLink: false },
        ]
      : [
          { name: "Dashboard", to: "dashboard", isLink: false },
          { name: "Signals", to: "signals", isLink: false },
          { name: "Blogs", to: "blogs", isLink: false },
          { name: "Charts", to: "charts", isLink: false },
        ]
    : [
        { name: "Features", to: "features", isLink: true },
        { name: "Access App", to: "access-app", isLink: true },
        { name: "Plans", to: "plans", isLink: true },
        { name: "Market", to: "market", isLink: true },
        { name: "FAQ", to: "faq", isLink: true },
        { name: "About Us", to: "about", isLink: true },
      ];

  const handleNavClick = (link) => {
    if (isAppView && !link.isLink) {
      // For app view, this would trigger tab changes in parent component
      // We'll emit a custom event that parent can listen to
      window.dispatchEvent(
        new CustomEvent("navTabChange", { detail: link.to })
      );
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isAppView
          ? "backdrop-blur-md shadow-md"
          : scrolled
          ? "backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor:
          isAppView || scrolled ? "var(--color-card-bg)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            {isAppView ? (
              <div className="flex items-center cursor-pointer">
                <img
                  className="h-10 w-auto sm:h-12 transition-all duration-300"
                  src={Logo}
                  alt="Logo"
                  style={{
                    maxHeight: "48px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : (
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="flex items-center"
              >
                <img
                  className="h-10 w-auto sm:h-12 transition-all duration-300"
                  src={Logo}
                  alt="Logo"
                  style={{
                    maxHeight: "48px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isLink ? (
                    <Link
                      activeClass="text-green-600 dark:text-green-400"
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-contrast-medium hover:text-contrast-high font-medium cursor-pointer transition-colors"
                      style={{
                        color: "var(--color-text-secondary)",
                        "--hover-color": "var(--color-primary)",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--color-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--color-text-secondary)")
                      }
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link)}
                      className={`font-medium cursor-pointer transition-colors ${
                        activeTab === link.to ? "text-contrast-high" : ""
                      }`}
                      style={{
                        color:
                          activeTab === link.to
                            ? "var(--color-primary)"
                            : "var(--color-text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== link.to) {
                          e.target.style.color = "var(--color-primary)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== link.to) {
                          e.target.style.color = "var(--color-text-secondary)";
                        }
                      }}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors"
                style={{
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "var(--color-card-hover)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="text-amber-400 h-5 w-5" />
                ) : (
                  <Moon className="text-gray-700 h-5 w-5" />
                )}
              </button>

              {user ? (
                <div className="flex items-center space-x-3">
                  {isPremium() && (
                    <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                      <Crown size={16} className="mr-1" />
                      <span className="text-sm font-medium">Premium</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <User
                      size={16}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user.username}
                    </span>
                    <button
                      onClick={logout}
                      className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      title="Logout"
                    >
                      <LogOut size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <a
                  href={loginUrl}
                  className="px-4 py-2 rounded-md font-medium transition-all hover:shadow-lg inline-block lego-button"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-neutral-light)",
                    borderColor: "var(--color-border-dark)",
                  }}
                >
                  Login
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="text-amber-400 h-5 w-5" />
              ) : (
                <Moon className="text-gray-700 h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors"
              style={{
                color: "var(--color-text-secondary)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--color-text-primary)";
                e.target.style.backgroundColor = "var(--color-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--color-text-secondary)";
                e.target.style.backgroundColor = "transparent";
              }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg"
          style={{ backgroundColor: "var(--color-card-bg)" }}
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.isLink ? (
                <Link
                  activeClass="text-green-600 dark:text-green-400"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  style={{
                    color: "var(--color-text-secondary)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--color-primary)";
                    e.target.style.backgroundColor = "var(--color-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--color-text-secondary)";
                    e.target.style.backgroundColor = "transparent";
                  }}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
                  style={{
                    color:
                      activeTab === link.to
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                    backgroundColor:
                      activeTab === link.to
                        ? "var(--color-card-hover)"
                        : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== link.to) {
                      e.target.style.color = "var(--color-primary)";
                      e.target.style.backgroundColor =
                        "var(--color-card-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== link.to) {
                      e.target.style.color = "var(--color-text-secondary)";
                      e.target.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
          {user ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                <User size={16} />
                <span>{user.username}</span>
                {isPremium() && (
                  <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                    <Crown size={14} className="mr-1" />
                    <span className="text-xs">Premium</span>
                  </div>
                )}
              </div>
              <button
                onClick={logout}
                className="block w-full text-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <a
              href={loginUrl}
              className="block w-full text-center px-4 py-2 rounded-md font-medium transition-all mt-3 lego-button"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-neutral-light)",
                borderColor: "var(--color-border-dark)",
              }}
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
