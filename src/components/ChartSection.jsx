import React, { useState, useEffect, useRef } from 'react';

const ChartSection = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTCUSD');
  const [timeframe, setTimeframe] = useState('1D');
  const containerRef = useRef(null);
  const tradingViewRef = useRef(null);

  const coins = [
    { id: 'BTCUSD', name: 'Bitcoin' },
    { id: 'ETHUSD', name: 'Ethereum' },
    { id: 'XRPUSD', name: 'Ripple' },
    { id: 'ADAUSD', name: 'Cardano' },
    { id: 'SOLUSD', name: 'Solana' }
  ];

  const timeframes = [
    { id: '1H', name: '1H' },
    { id: '4H', name: '4H' },
    { id: '1D', name: '1D' },
    { id: '1W', name: '1W' },
    { id: '1M', name: '1M' }
  ];

  const getInterval = () => {
    switch (timeframe) {
      case '1H': return '60';
      case '4H': return '240';
      case '1D': return 'D';
      case '1W': return 'W';
      case '1M': return 'M';
      default: return 'D';
    }
  };

  useEffect(() => {
    if (
      typeof TradingView !== 'undefined' && 
      containerRef.current && 
      !tradingViewRef.current
    ) {
      createWidget();
    }
  }, []);

  useEffect(() => {
    if (typeof TradingView !== 'undefined' && containerRef.current) {
      if (tradingViewRef.current) {
        containerRef.current.innerHTML = '';
        tradingViewRef.current = null;
      }
      createWidget();
    }
  }, [selectedCoin, timeframe]);

  const createWidget = () => {
    tradingViewRef.current = new TradingView.widget({
      container_id: containerRef.current.id,
      symbol: `BINANCE:${selectedCoin}`,
      interval: getInterval(),
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      height: 500,
      allow_symbol_change: true,
      studies: ['RSI@tv-basicstudies', 'MAExp@tv-basicstudies', 'MACD@tv-basicstudies'],
      show_popup_button: true,
      popup_width: '1000',
      popup_height: '650',
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-100">Interactive </span>
            <span className="text-amber-500 dark:text-amber-400">Price </span>
            <span className="text-green-600 dark:text-green-400">Charts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze price movements, identify trends, and make informed trading decisions with our interactive charts.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Select Coin</label>
                <div className="flex space-x-2">
                  {coins.map((coin) => (
                    <button
                      key={coin.id}
                      onClick={() => setSelectedCoin(coin.id)}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        selectedCoin === coin.id
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      {coin.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Timeframe</label>
                <div className="flex space-x-2">
                  {timeframes.map((tf) => (
                    <button
                      key={tf.id}
                      onClick={() => setTimeframe(tf.id)}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        timeframe === tf.id
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      {tf.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div id="tradingview_widget" ref={containerRef} className="w-full" style={{ height: '500px' }}></div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Charts powered by TradingView • Data delayed by 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;