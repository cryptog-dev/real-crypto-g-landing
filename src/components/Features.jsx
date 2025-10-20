import React from 'react';
import { TrendingUp, Target, Users, DollarSign, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="h-9 w-9 text-green-500" />,
      title: 'Accurate Signals',
      description: 'High-quality signals with precise entry, target, and stop-loss levels.'
    },
    {
      icon: <Target className="h-9 w-9 text-amber-500" />,
      title: 'Expert Analysis',
      description: 'Detailed market analysis and strategic insights from pro traders.'
    },
    {
      icon: <Users className="h-9 w-9 text-green-500" />,
      title: 'Community Support',
      description: 'Active trader community sharing insights and strategies.'
    },
    {
      icon: <DollarSign className="h-9 w-9 text-amber-500" />,
      title: 'Real Profits',
      description: 'Signals designed for maximum gains with balanced risk.'
    },
    {
      icon: <Clock className="h-9 w-9 text-green-500" />,
      title: 'Timely Updates',
      description: 'Instant alerts for entries, exits, and market shifts.'
    },
    {
      icon: <Shield className="h-9 w-9 text-amber-500" />,
      title: 'Risk Management',
      description: 'Capital preservation with stop-loss and sizing guidance.'
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden"
             style={{ backgroundColor: 'var(--color-neutral-light)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full blur-3xl"
             style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl"
             style={{ backgroundColor: 'var(--color-accent2)', opacity: 0.1 }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span style={{ color: 'var(--color-text-primary)' }}>Our </span>
          <span style={{ color: 'var(--color-primary)' }}>Core </span>
          <span style={{ color: 'var(--color-accent2)' }}>Features</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-14" style={{ color: 'var(--color-text-secondary)' }}>
          Designed to give you an edge in crypto trading with clarity, speed, and accuracy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between p-8 rounded-xl backdrop-blur-2xl
                         shadow-md hover:shadow-xl
                         transition-all duration-300 hover:scale-105 lego-card"
            >
              <div>
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl"
                     style={{ backgroundColor: 'var(--color-card-hover)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
              <div className="mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;