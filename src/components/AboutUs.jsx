import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      value: '5,000+',
      label: 'Active Members'
    },
    {
      icon: <Award className="h-10 w-10 text-amber-500" />,
      value: '95%',
      label: 'Signal Accuracy'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-500" />,
      value: '2+ Years',
      label: 'Market Experience'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-100">About </span>
            <span className="text-green-600 dark:text-green-400">Our </span>
            <span className="text-amber-500 dark:text-amber-400">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about our mission, expertise, and commitment to helping traders succeed in the crypto market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At CryptoG, our mission is to empower traders with accurate signals, comprehensive market analysis, and educational resources to navigate the cryptocurrency markets successfully. We believe in transparency, reliability, and building a supportive trading community.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team consists of experienced traders and technical analysts with backgrounds in finance, data science, and blockchain technology. With years of experience in cryptocurrency trading, we combine technical analysis, fundamental research, and market sentiment to provide high-quality trading signals.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Commitment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to your success as a trader. Beyond providing signals, we focus on education, risk management, and building a supportive community where members can learn and grow together. Our success is measured by the success of our members.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-amber-500 to-green-600 p-1 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-green-600 opacity-80"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Join Our Community Today</h3>
                <p className="mb-6">
                  Become part of our growing community of successful traders. Start with our free channel or upgrade to premium for maximum value.
                </p>
                <a 
                  href="google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-amber-600 font-medium px-5 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Start Trading Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;