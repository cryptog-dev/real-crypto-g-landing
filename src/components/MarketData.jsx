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
    <section id="market" className="py-16 md:py-24 relative overflow-hidden"
             style={{ backgroundColor: 'var(--color-neutral-light)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl"
           style={{ backgroundColor: 'var(--color-primary)', opacity: 0.05 }}></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-3xl"
           style={{ backgroundColor: 'var(--color-accent2)', opacity: 0.05 }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: 'var(--color-text-primary)' }}>Real-Time </span>
            <span style={{ color: 'var(--color-primary)' }}>Crypto </span>
            <span style={{ color: 'var(--color-accent2)' }}>Market</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Stay updated with live cryptocurrency prices, market caps, and 24-hour changes.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-8 w-8 text-green-500 animate-spin" />
            <span className="ml-2" style={{ color: 'var(--color-text-secondary)' }}>Loading market data...</span>
          </div>
        ) : error ? (
          <div className="text-center p-8 rounded-xl border"
               style={{
                 backgroundColor: 'var(--color-card-bg)',
                 borderColor: 'var(--color-secondary)'
               }}>
            <p style={{ color: 'var(--color-secondary)' }}>{error}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: 'var(--color-card-hover)' }}>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-secondary)' }}>Coin</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-secondary)' }}>Price</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-secondary)' }}>24h Change</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-secondary)' }}>24h Volume</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-secondary)' }}>Market Cap</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'var(--color-card-bg)' }}>
                {cryptoData.map((coin) => (
                  <tr 
                    key={coin.id} 
                    className="transition-colors"
                    style={{
                      borderBottomColor: 'var(--color-border-light)',
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-card-hover)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-card-bg)'}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full mr-3" src={coin.image} alt={coin.name} />
                        <div>
                          <div className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{coin.name}</div>
                          <div className="uppercase" style={{ color: 'var(--color-text-secondary)' }}>{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-medium"
                        style={{ color: 'var(--color-text-primary)' }}>
                      ${coin.current_price < 0.01 ? coin.current_price.toFixed(6) : coin.current_price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-medium"
                        style={{
                          color: coin.price_change_percentage_24h >= 0 ? 'var(--color-accent1)' : 'var(--color-secondary)'
                        }}>
                      <div className="flex items-center justify-end">
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right"
                        style={{ color: 'var(--color-text-secondary)' }}>
                      ${formatNumber(coin.total_volume)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right"
                        style={{ color: 'var(--color-text-secondary)' }}>
                      ${formatNumber(coin.market_cap)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-8 text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Data provided by CoinGecko API • Updated every 60 seconds
        </div>
      </div>
    </section>
  );
};

export default MarketData;