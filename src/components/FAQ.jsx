import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      question: "What are crypto trading signals?",
      answer:
        "Crypto trading signals are buy/sell recommendations provided by experienced traders and analysts. They include entry prices, target prices, stop-loss levels, and timing information to help you make informed trading decisions in the cryptocurrency market.",
    },
    {
      question: "How accurate are your signals?",
      answer:
        "Our signals maintain a 95% accuracy rate based on our historical performance data. We use a combination of technical analysis, fundamental research, and market sentiment analysis to provide high-quality trading recommendations. However, past performance doesn't guarantee future results.",
    },
    {
      question: "What's the difference between free and premium signals?",
      answer:
        "Free signals are limited and provided with basic information. Premium signals include detailed analysis, multiple entry points, advanced risk management strategies, real-time updates, and access to our private community where you can interact with other traders and our analysts.",
    },
    {
      question: "How much capital should I start with?",
      answer:
        "We recommend starting with capital you can afford to lose. Never invest more than 5-10% of your total portfolio in crypto trading. Start small, learn our strategies, and gradually increase your position sizes as you become more comfortable with our signals and risk management.",
    },
    {
      question: "Do you provide educational content?",
      answer:
        "Yes! Our premium members receive access to educational materials including trading guides, market analysis tutorials, risk management strategies, and regular webinars. We believe in empowering our community with knowledge, not just signals.",
    },
    {
      question: "What exchanges do your signals work on?",
      answer:
        "Our signals are designed to work on major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, KuCoin, and others. We provide exchange-agnostic recommendations, though some signals may be optimized for specific platforms.",
    },
    {
      question: "How often do you send signals?",
      answer:
        "We typically send 3-5 high-quality signals per week during active market conditions. Quality over quantity is our philosophy. We focus on high-probability setups rather than flooding you with numerous low-quality recommendations.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll continue to have access to premium features until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first week, you can request a full refund. We're confident in the quality of our signals and want you to experience the value firsthand.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Choose a subscription plan that fits your needs, complete the payment, and you'll receive immediate access to our premium signals and community. We'll also send you a welcome guide with best practices for using our signals effectively.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-light)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-primary)", opacity: 0.05 }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--color-accent2)", opacity: 0.05 }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: "var(--color-text-primary)" }}>
              Frequently Asked{" "}
            </span>
            <span style={{ color: "var(--color-primary)" }}>Questions</span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Find answers to common questions about our crypto trading signals,
            subscription plans, and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="lego-card">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center transition-all duration-200"
                onClick={() => toggleItem(index)}
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--color-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--color-card-bg)";
                }}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUp
                      className="h-5 w-5 transition-transform duration-200"
                      style={{ color: "var(--color-primary)" }}
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 transition-transform duration-200"
                      style={{ color: "var(--color-text-secondary)" }}
                    />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  borderTopColor: "var(--color-border-light)",
                  borderTopWidth: openItems[index] ? "1px" : "0px",
                  borderTopStyle: "solid",
                }}
              >
                <div
                  className="px-6 py-4"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
