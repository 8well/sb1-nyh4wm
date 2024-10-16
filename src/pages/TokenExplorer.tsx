import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpDown, ExternalLink } from 'lucide-react'
import CryptoDiamonds from '../components/CryptoDiamonds'

interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
}

const TokenExplorer: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [sortColumn, setSortColumn] = useState<keyof Token>('marketCap');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockTokens: Token[] = [
      { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5, marketCap: 1000000000000, volume24h: 50000000000 },
      { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: 1.8, marketCap: 500000000000, volume24h: 25000000000 },
      { id: '3', name: 'Cardano', symbol: 'ADA', price: 2.5, change24h: -0.5, marketCap: 100000000000, volume24h: 5000000000 },
      { id: '4', name: 'Solana', symbol: 'SOL', price: 150, change24h: 5.2, marketCap: 50000000000, volume24h: 2500000000 },
      { id: '5', name: 'Polkadot', symbol: 'DOT', price: 35, change24h: 3.1, marketCap: 40000000000, volume24h: 2000000000 },
    ];
    setTokens(mockTokens);
  }, []);

  const sortTokens = (column: keyof Token) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }

    const sortedTokens = [...tokens].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setTokens(sortedTokens);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Token Explorer</h1>
      
      {/* CryptoDiamonds component */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Top 50 Crypto Diamonds
        </h2>
        <CryptoDiamonds />
      </div>

      <h2 className="text-2xl font-bold mb-4">Token List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="text-left">
              <th className="p-4 cursor-pointer" onClick={() => sortTokens('name')}>
                Name <ArrowUpDown className="inline ml-1" size={16} />
              </th>
              <th className="p-4 cursor-pointer" onClick={() => sortTokens('price')}>
                Price <ArrowUpDown className="inline ml-1" size={16} />
              </th>
              <th className="p-4 cursor-pointer" onClick={() => sortTokens('change24h')}>
                24h Change <ArrowUpDown className="inline ml-1" size={16} />
              </th>
              <th className="p-4 cursor-pointer" onClick={() => sortTokens('marketCap')}>
                Market Cap <ArrowUpDown className="inline ml-1" size={16} />
              </th>
              <th className="p-4 cursor-pointer" onClick={() => sortTokens('volume24h')}>
                24h Volume <ArrowUpDown className="inline ml-1" size={16} />
              </th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.id} className="border-t border-gray-700">
                <td className="p-4">
                  <Link to={`/tokens/${token.id}`} className="flex items-center">
                    <span className="font-bold">{token.name}</span>
                    <span className="ml-2 text-gray-400">{token.symbol}</span>
                  </Link>
                </td>
                <td className="p-4">${token.price.toLocaleString()}</td>
                <td className={`p-4 ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {token.change24h.toFixed(2)}%
                </td>
                <td className="p-4">${token.marketCap.toLocaleString()}</td>
                <td className="p-4">${token.volume24h.toLocaleString()}</td>
                <td className="p-4">
                  <Link to={`/tokens/${token.id}`} className="text-blue-400 hover:text-blue-300">
                    Details <ExternalLink className="inline ml-1" size={16} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive card layout for mobile */}
      <div className="md:hidden mt-8">
        {tokens.map((token) => (
          <div key={token.id} className="bg-gray-800 p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold">{token.name} ({token.symbol})</h3>
            <p>Price: ${token.price.toLocaleString()}</p>
            <p className={`${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              24h Change: {token.change24h.toFixed(2)}%
            </p>
            <p>Market Cap: ${token.marketCap.toLocaleString()}</p>
            <p>24h Volume: ${token.volume24h.toLocaleString()}</p>
            <Link to={`/tokens/${token.id}`} className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
              Details <ExternalLink className="inline ml-1" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenExplorer;