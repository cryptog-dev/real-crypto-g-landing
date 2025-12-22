import React, { useEffect } from "react";
import { Check, Gift, Snowflake, Star } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "1 Month Access",
      description: "Full access to premium signals and analytics for one month",
      originalPrice: "$49",
      price: "$19.60",
      color: "blue",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "Priority support",
      ],
      buttonText: "Get 60% Off - Christmas Deal",
      link: "https://www.therealcryptog.com/subscribe/1month",
      showDiscount: true,
      discountPercent: 60,
    },

    {
      name: "3 Months Access",
      description: "Save more with a 3-month subscription to premium signals",
      originalPrice: "$99",
      price: "$39.60",
      color: "green",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "Priority support",
        "Exclusive strategy insights",
      ],
      buttonText: "Get 60% Off - Christmas Deal",
      link: "https://www.therealcryptog.com/subscribe/3month",
      showDiscount: true,
      discountPercent: 60,
      popular: true,
    },

    {
      name: "Yearly / Lifetime Access",
      description:
        "Best value — long-term access to all premium signals and tools",
      originalPrice: "$299",
      price: "$119.60",
      color: "gold",
      features: [
        "Daily premium signals",
        "PnL and performance analytics",
        "Private premium group access",
        "1-on-1 Q&A sessions",
        "Exclusive long-term strategies",
        "Lifetime updates and tools",
      ],
      buttonText: "Get 60% Off - Christmas Deal",
      link: "https://www.therealcryptog.com/subscribe/lifetime",
      showDiscount: true,
      discountPercent: 60,
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

  // Snow effect
  useEffect(() => {
    const createSnowFlake = () => {
      const snowFlake = document.createElement('div');
      snowFlake.innerHTML = '❄';
      snowFlake.style.position = 'fixed';
      snowFlake.style.left = Math.random() * window.innerWidth + 'px';
      snowFlake.style.top = '-20px';
      snowFlake.style.opacity = Math.random();
      snowFlake.style.fontSize = Math.random() * 20 + 10 + 'px';
      snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowFlake.style.animationName = 'fall';
      snowFlake.style.animationTimingFunction = 'linear';
      snowFlake.style.animationIterationCount = 'infinite';
      snowFlake.style.zIndex = '1000';
      snowFlake.style.pointerEvents = 'none';
      document.body.appendChild(snowFlake);

      // Remove snowflake after animation completes
      setTimeout(() => {
        snowFlake.remove();
      }, 10000);
    };

    // Create initial snowflakes
    const snowInterval = setInterval(createSnowFlake, 300);

    // Cleanup
    return () => clearInterval(snowInterval);
  }, []);

  return (
    <section
      id="plans"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-card-bg)',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23e53e3e\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
      }}
    >
      {/* Christmas Decorative elements */}
      <div className="absolute top-0 left-0 right-0 py-2 text-center font-bold" style={{ 
        backgroundColor: '#c53030', 
        color: 'white',
        background: 'linear-gradient(90deg, #1a365d 0%, #2c5282 25%, #2b6cb0 50%, #2c5282 75%, #1a365d 100%)',
        borderBottom: '2px solid #c53030'
      }}>
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Gift className="h-5 w-5 text-yellow-300" />
          <span className="text-yellow-300">MERRY CHRISTMAS!</span>
          <span className="mx-2">🎄</span>
          <span>60% OFF ALL PLANS - LIMITED TIME OFFER!</span>
          <span className="mx-2">🎄</span>
          <Star className="h-5 w-5 text-yellow-300" />
        </div>
      </div>
      {/* Christmas Ornaments */}
      <div className="absolute top-20 right-10 w-16 h-16 rounded-full" 
           style={{ 
             background: 'radial-gradient(circle at 30% 30%, #fff, #f56565)',
             boxShadow: '0 0 20px #f56565',
             opacity: 0.8,
             animation: 'float 6s ease-in-out infinite'
           }}></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full" 
           style={{ 
             background: 'radial-gradient(circle at 30% 30%, #fff, #48bb78)',
             boxShadow: '0 0 15px #48bb78',
             opacity: 0.8,
             animation: 'float 8s ease-in-out infinite 1s'
           }}></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full" 
           style={{ 
             background: 'radial-gradient(circle at 30% 30%, #fff, #f6ad55)',
             boxShadow: '0 0 10px #f6ad55',
             opacity: 0.8,
             animation: 'float 7s ease-in-out infinite 0.5s'
           }}></div>

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
              <div className="rounded-xl overflow-hidden h-full flex flex-col lego-card relative group hover:shadow-lg transition-all duration-300"
                   style={{
                     background: 'linear-gradient(145deg, var(--color-card-bg) 0%, #1a202c 100%)',
                     border: '1px solid rgba(255, 255, 255, 0.05)'
                   }}>
                {/* Christmas Ribbon */}
                {plan.popular && (
                  <div className="absolute -right-8 top-4 w-32 bg-red-600 text-white text-xs font-bold py-1 px-2 transform rotate-45 text-center shadow-md"
                       style={{ backgroundColor: '#c53030' }}>
                    <Gift className="h-3 w-3 inline-block mr-1" />
                    POPULAR
                  </div>
                )}
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
                    {plan.showDiscount && (
                      <div className="flex items-center mb-1">
                        <span className="text-sm line-through opacity-70 mr-2" style={{ color: 'var(--color-text-secondary)' }}>
                          {plan.originalPrice}
                        </span>
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {plan.discountPercent}% OFF
                        </span>
                      </div>
                    )}
                    <span className="text-4xl font-bold" style={{ color: 'var(--color-accent2)' }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-2" style={{ color: 'var(--color-text-secondary)' }}>
                        {plan.period}
                      </span>
                    )}
                    {plan.showDiscount && (
                      <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        Christmas Special Offer
                      </div>
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
