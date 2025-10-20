import React from "react";
import { Link } from "react-scroll";
import { Mail } from "lucide-react";
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import Logo1 from "../assets/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "FAQ", to: "faq" },
    { name: "Features", to: "features" },
    { name: "Plans", to: "plans" },
    { name: "Market", to: "market" },
    { name: "About Us", to: "about" },
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="h-5 w-5" />,
      href: "https://x.com/T_Cryptog",
      name: "Twitter",
      color: "#1DA1F2", // Twitter blue
      hoverColor: "var(--color-accent2)", // Golden yellow
    },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      href: "https://www.instagram.com/therealcrypto_g/",
      name: "Instagram",
      color: "#E4405F", // Instagram pink
      hoverColor: "#E4405F", // Keep Instagram pink
    },
    {
      icon: <FaTelegram className="h-5 w-5" />,
      href: "https://t.me/therealcryptog_official#",
      name: "Telegram",
      color: "#0088CC", // Telegram blue
      hoverColor: "var(--color-accent1)", // Teal mint
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--color-neutral-dark)",
        color: "var(--color-neutral-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="hero" smooth={true} duration={500}>
              <div className="flex items-center cursor-pointer mb-4">
                <img
                  src={Logo1}
                  alt="CryptoG Logo"
                  className="h-12 w-auto transition-all duration-300"
                  style={{
                    maxHeight: "120px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>
            <p
              className="mb-6 max-w-md"
              style={{ color: "var(--color-neutral-light)", opacity: 0.8 }}
            >
              Premium crypto trading signals, expert analysis, and a supportive
              community to help you navigate the cryptocurrency markets
              profitably.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-neutral-light)",
                    color: link.color,
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = link.hoverColor;
                    e.target.style.color = "var(--color-neutral-light)";
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = `0 4px 12px ${link.hoverColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      "var(--color-neutral-light)";
                    e.target.style.color = link.color;
                    e.target.style.opacity = "0.8";
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-neutral-light)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="transition-colors cursor-pointer"
                    style={{
                      color: "var(--color-neutral-light)",
                      opacity: 0.8,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--color-primary)";
                      e.target.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--color-neutral-light)";
                      e.target.style.opacity = "0.8";
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-neutral-light)" }}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <p
                className="flex items-center"
                style={{ color: "var(--color-neutral-light)", opacity: 0.8 }}
              >
                <Mail
                  className="h-5 w-5 mr-2"
                  style={{ color: "var(--color-primary)" }}
                />
                therealcryptog.official@gmail.com
              </p>
              <p style={{ color: "var(--color-neutral-light)", opacity: 0.8 }}>
                Join our Telegram channel for the fastest support and updates.
              </p>
              <a
                href="support-google-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-md font-medium transition-colors lego-button"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-neutral-light)",
                  borderColor: "var(--color-border-dark)",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{
            borderTopColor: "var(--color-border-light)",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-neutral-light)", opacity: 0.8 }}
          >
            &copy; {currentYear} CryptoG. All rights reserved.
          </p>
          <div
            className="mt-4 md:mt-0 space-x-4 text-sm"
            style={{ color: "var(--color-neutral-light)", opacity: 0.8 }}
          >
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "0.8";
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "0.8";
              }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--color-neutral-light)";
                e.target.style.opacity = "0.8";
              }}
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
