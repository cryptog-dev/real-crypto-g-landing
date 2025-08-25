import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingUp, TrendingDown, Loader } from 'lucide-react';

const MarketData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,ripple,cardano,solana,polkadot,dogecoin,avalanche-2',
              order: 'market_cap_desc',
              per_page: 8,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h'
            }
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching crypto data:', err);
        setError('Failed to load market data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCryptoData();

    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Format numbers to have commas for thousands
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section id="market" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-100">Real-Time </span>
            <span className="text-green-600 dark:text-green-400">Crypto </span>
            <span className="text-amber-500 dark:text-amber-400">Market</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with live cryptocurrency prices, market caps, and 24-hour changes.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-8 w-8 text-green-500 animate-spin" />
            <span className="ml-2 text-gray-600 dark:text-gray-300">Loading market data...</span>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Coin</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">24h Change</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">24h Volume</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Market Cap</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {cryptoData.map((coin) => (
                  <tr 
                    key={coin.id} 
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full mr-3" src={coin.image} alt={coin.name} />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">{coin.name}</div>
                          <div className="text-gray-500 dark:text-gray-400 uppercase">{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-800 dark:text-gray-200 font-medium">
                      ${coin.current_price < 0.01 ? coin.current_price.toFixed(6) : coin.current_price.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right font-medium ${
                      coin.price_change_percentage_24h >= 0 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      <div className="flex items-center justify-end">
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600 dark:text-gray-300">
                      ${formatNumber(coin.total_volume)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600 dark:text-gray-300">
                      ${formatNumber(coin.market_cap)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Data provided by CoinGecko API • Updated every 60 seconds
        </div>
      </div>
    </section>
  );
};

export default MarketData;