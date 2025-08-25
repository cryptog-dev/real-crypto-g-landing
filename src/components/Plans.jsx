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

  const getButtonClasses = (color) => {
    const baseClasses =
      "w-full py-3 px-4 rounded-md font-medium transition-all text-white text-center";

    const colorClasses = {
      green:
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-lg",
      blue: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg",
      amber:
        "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg",

      gold:
        "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 hover:shadow-lg"
    };

    return `${baseClasses} ${colorClasses[color] || colorClasses.blue}`;
  };

  return (
    <section
      id="plans"
      className="py-16 md:py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-100">
              Choose Your{" "}
            </span>
            <span className="text-amber-500 dark:text-amber-400">Trading </span>
            <span className="text-green-600 dark:text-green-400">Plan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden h-full flex flex-col">
                {plan.popular && (
                  <div className="bg-blue-500 text-white py-1 px-4 text-sm font-medium text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
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
                        <span className="text-gray-600 dark:text-gray-300">
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
                    className={getButtonClasses(plan.color)}
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
