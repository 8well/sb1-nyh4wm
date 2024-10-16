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
  market_cap_rank: number;
}

const timeFrames = ['1h', '24h', '7d', '30d', '1y'];

const colorRanges = [
  { range: '> 20%', color: 'from-green-600 to-green-400' },
  { range: '10% to 20%', color: 'from-green-500 to-green-300' },
  { range: '5% to 10%', color: 'from-green-400 to-green-200' },
  { range: '0% to 5%', color: 'from-green-300 to-green-100' },
  { range: '0%', color: 'from-gray-400 to-gray-200' },
  { range: '-5% to 0%', color: 'from-red-300 to-red-100' },
  { range: '-10% to -5%', color: 'from-red-400 to-red-200' },
  { range: '-20% to -10%', color: 'from-red-500 to-red-300' },
  { range: '< -20%', color: 'from-red-600 to-red-400' },
];

const CryptoDiamonds: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Cryptocurrency[]>([]);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('24h');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Cryptocurrency[]>(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 50,
              page: 1,
              sparkline: false,
              price_change_percentage: '1h,24h,7d,30d,1y',
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
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
    if (percentage > 20) return 'from-green-600 to-green-400';
    if (percentage > 10) return 'from-green-500 to-green-300';
    if (percentage > 5) return 'from-green-400 to-green-200';
    if (percentage > 0) return 'from-green-300 to-green-100';
    if (percentage === 0) return 'from-gray-400 to-gray-200';
    if (percentage > -5) return 'from-red-300 to-red-100';
    if (percentage > -10) return 'from-red-400 to-red-200';
    if (percentage > -20) return 'from-red-500 to-red-300';
    return 'from-red-600 to-red-400';
  };

  const sortedCryptoData = [...cryptoData].sort((a, b) => 
    getPercentageChange(b) - getPercentageChange(a)
  );

  return (
    <div className="crypto-diamonds">
      <div className="mb-8 flex justify-center">
        {timeFrames.map((timeFrame) => (
          <button
            key={timeFrame}
            className={`mx-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedTimeFrame === timeFrame
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setSelectedTimeFrame(timeFrame)}
          >
            {timeFrame}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
        {sortedCryptoData.map((crypto) => {
          const percentageChange = getPercentageChange(crypto);
          return (
            <div
              key={crypto.id}
              className={`relative w-full h-40 bg-gradient-to-br ${getColorForPercentage(percentageChange)} rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-45 group`}
              title={`${crypto.name} (${crypto.symbol.toUpperCase()})\nMarket Cap: $${crypto.market_cap.toLocaleString()}\nPrice: $${crypto.current_price.toLocaleString()}\nChange (${selectedTimeFrame}): ${percentageChange.toFixed(2)}%`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-110">
                  <p className="font-bold text-xl text-white mb-1">{crypto.symbol.toUpperCase()}</p>
                  <p className="text-lg text-white font-semibold">{percentageChange.toFixed(1)}%</p>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 text-xs text-white opacity-70">
                #{crypto.market_cap_rank}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Color Key</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {colorRanges.map(({ range, color }) => (
            <div key={range} className="flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-md">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} mr-3`}></div>
              <span className="text-sm">{range}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDiamonds;