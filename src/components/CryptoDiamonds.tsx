import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  market_cap: number;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_30d_in_currency: number;
  price_change_percentage_1y_in_currency: number;
}

const timeFrames = ['1h', '24h', '7d', '30d', '1y'];

const colorRanges = [
  { range: '> 20%', color: 'bg-green-600' },
  { range: '10% to 20%', color: 'bg-green-500' },
  { range: '5% to 10%', color: 'bg-green-400' },
  { range: '0% to 5%', color: 'bg-green-300' },
  { range: '0%', color: 'bg-gray-300' },
  { range: '-5% to 0%', color: 'bg-red-300' },
  { range: '-10% to -5%', color: 'bg-red-400' },
  { range: '-20% to -10%', color: 'bg-red-500' },
  { range: '< -20%', color: 'bg-red-600' },
];

const CryptoDiamonds: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Cryptocurrency[]>([]);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('24h');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<Cryptocurrency[]>(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
              price_change_percentage: '1h,24h,7d,30d,1y',
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        setError('Failed to fetch cryptocurrency data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPercentageChange = (crypto: Cryptocurrency) => {
    switch (selectedTimeFrame) {
      case '1h':
        return crypto.price_change_percentage_1h_in_currency;
      case '24h':
        return crypto.price_change_percentage_24h_in_currency;
      case '7d':
        return crypto.price_change_percentage_7d_in_currency;
      case '30d':
        return crypto.price_change_percentage_30d_in_currency;
      case '1y':
        return crypto.price_change_percentage_1y_in_currency;
      default:
        return 0;
    }
  };

  const getColorForPercentage = (percentage: number) => {
    if (percentage > 20) return 'bg-green-600';
    if (percentage > 10) return 'bg-green-500';
    if (percentage > 5) return 'bg-green-400';
    if (percentage > 0) return 'bg-green-300';
    if (percentage === 0) return 'bg-gray-300';
    if (percentage > -5) return 'bg-red-300';
    if (percentage > -10) return 'bg-red-400';
    if (percentage > -20) return 'bg-red-500';
    return 'bg-red-600';
  };

  const sortedCryptoData = [...cryptoData].sort((a, b) => 
    getPercentageChange(b) - getPercentageChange(a)
  );

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="crypto-diamonds">
      <h2 className="text-3xl font-bold mb-6 text-center">Crypto Diamonds</h2>
      <div className="mb-4 flex justify-center">
        {timeFrames.map((timeFrame) => (
          <button
            key={timeFrame}
            className={`mx-2 px-4 py-2 rounded ${
              selectedTimeFrame === timeFrame
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 hover:bg-blue-100'
            }`}
            onClick={() => setSelectedTimeFrame(timeFrame)}
          >
            {timeFrame}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
        {sortedCryptoData.map((crypto) => {
          const percentageChange = getPercentageChange(crypto);
          return (
            <div
              key={crypto.id}
              className={`relative w-24 h-24 ${getColorForPercentage(percentageChange)} rounded-lg shadow-lg transform rotate-45 overflow-hidden cursor-pointer transition-transform hover:scale-110`}
              title={`${crypto.name} (${crypto.symbol.toUpperCase()})\nMarket Cap: $${crypto.market_cap.toLocaleString()}\nPrice: $${crypto.current_price.toLocaleString()}\nChange (${selectedTimeFrame}): ${percentageChange.toFixed(2)}%`}
            >
              <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                <div className="text-center">
                  <p className="font-bold text-xs">{crypto.symbol.toUpperCase()}</p>
                  <p className="text-xs">{percentageChange.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">Color Key</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {colorRanges.map(({ range, color }) => (
            <div key={range} className="flex items-center">
              <div className={`w-6 h-6 ${color} rounded mr-2`}></div>
              <span>{range}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDiamonds;