import React from "react";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "1 Month Access",
      description: "Full access to premium signals and analytics for one month",
      price: "$49",
      color: "blue",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "Priority support",
      ],
      buttonText: "Subscribe for 1 Month",
      link: "https://www.therealcryptog.com/subscribe/1month",
    },

    {
      name: "3 Months Access",
      description: "Save more with a 3-month subscription to premium signals",
      price: "$99",
      color: "green",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "Priority support",
        "Exclusive strategy insights",
      ],
      buttonText: "Subscribe for 3 Months",
      link: "https://www.therealcryptog.com/subscribe/3month",
    },

    {
      name: "Yearly / Lifetime Access",
      description:
        "Best value — long-term access to all premium signals and tools",
      price: "$299",
      color: "gold",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "1-on-1 Q&A sessions",
        "Exclusive long-term strategies",
        "Lifetime updates and tools",
      ],
      buttonText: "Subscribe for Lifetime",
      link: "https://www.therealcryptog.com/subscribe/lifetime",
    },
  ];

  const getButtonStyle = (color) => {
    const colorMap = {
      green: 'var(--color-primary)',
      blue: 'var(--color-primary)',
      amber: 'var(--color-accent2)',
      gold: 'var(--color-accent2)'
    };
    
    return {
      background: colorMap[color] || colorMap.blue,
      color: 'var(--color-neutral-light)',
      borderColor: 'var(--color-border-dark)'
    };
  };

  return (
    <section
      id="plans"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-card-bg)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl"
           style={{ backgroundColor: 'var(--color-accent2)', opacity: 0.05 }}></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl"
           style={{ backgroundColor: 'var(--color-primary)', opacity: 0.05 }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: 'var(--color-text-primary)' }}>
              Choose Your{" "}
            </span>
            <span style={{ color: 'var(--color-accent2)' }}>Trading </span>
            <span style={{ color: 'var(--color-primary)' }}>Plan</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Select the plan that fits your trading style and goals. Upgrade or
            downgrade anytime as your needs change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "shadow-xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 transform hover:-translate-y-2"
                  : "shadow-md hover:shadow-xl transform hover:-translate-y-1"
              }`}
            >
              <div className="rounded-xl overflow-hidden h-full flex flex-col lego-card">
                {plan.popular && (
                  <div className="py-1 px-4 text-sm font-medium text-center"
                       style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-neutral-light)' }}>
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {plan.name}
                  </h3>
                  <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-2" style={{ color: 'var(--color-text-secondary)' }}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          className={`h-5 w-5 mr-2 text-${plan.color}-500 flex-shrink-0 mt-0.5`}
                        />
                        <span style={{ color: 'var(--color-text-secondary)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-md font-medium transition-all text-center lego-button"
                    style={getButtonStyle(plan.color)}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
