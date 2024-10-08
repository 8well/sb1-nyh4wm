import React from 'react'
import { useParams } from 'react-router-dom'
import { Globe, Twitter } from 'lucide-react'

const TokenDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Simulated data fetching based on the id
  // In a real application, you would fetch this data from an API
  const getTokenData = (tokenId: string) => {
    // Placeholder data
    const tokens = {
      '1': { name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5, marketCap: 1000000000000, volume24h: 50000000000 },
      '2': { name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: 1.8, marketCap: 500000000000, volume24h: 25000000000 },
    }
    return tokens[tokenId as keyof typeof tokens] || { name: 'Unknown Token', symbol: 'UNK', price: 0, change24h: 0, marketCap: 0, volume24h: 0 }
  }

  const token = getTokenData(id || '1')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{token.name} ({token.symbol})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Price Information</h2>
          <p className="text-3xl font-bold">${token.price.toFixed(2)}</p>
          <p className={`text-xl ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Market Data</h2>
          <p>Market Cap: ${token.marketCap.toLocaleString()}</p>
          <p>24h Volume: ${token.volume24h.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Links</h2>
        <div className="flex space-x-4">
          <a href={`https://example.com/${token.symbol.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Globe className="mr-2" /> Website
          </a>
          <a href={`https://twitter.com/${token.symbol.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Twitter className="mr-2" /> Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

export default TokenDetail