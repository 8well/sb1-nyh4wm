import React from 'react'
import { Link } from 'react-router-dom'
import { Activity, MessageCircle } from 'lucide-react'
import BlockchainPerformance from '../components/BlockchainPerformance'

const Home: React.FC = () => {
  const topCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: 50000, change: 2.5 },
    { name: 'Ethereum', symbol: 'ETH', price: 3000, change: 1.8 },
    { name: 'Cardano', symbol: 'ADA', price: 2.5, change: -0.5 },
    { name: 'Solana', symbol: 'SOL', price: 150, change: 5.2 },
    { name: 'Polkadot', symbol: 'DOT', price: 35, change: 3.1 },
  ]

  const trendingTokens = [
    { name: 'Chainlink', symbol: 'LINK', price: 30, change: 8.7 },
    { name: 'Uniswap', symbol: 'UNI', price: 28, change: 6.3 },
    { name: 'Aave', symbol: 'AAVE', price: 400, change: 4.9 },
    { name: 'Polygon', symbol: 'MATIC', price: 1.8, change: 10.2 },
    { name: 'Avalanche', symbol: 'AVAX', price: 80, change: 7.5 },
  ]

  const latestNews = [
    { title: 'Bitcoin Reaches New All-Time High', source: 'CryptoNews' },
    { title: 'Ethereum 2.0 Upgrade Scheduled for Next Month', source: 'BlockchainInsider' },
    { title: 'Major Bank Announces Crypto Custody Service', source: 'FinTech Today' },
    { title: 'New DeFi Protocol Gains $1B in Total Value Locked', source: 'DeFi Pulse' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to DisplayTokens</h1>
      <p className="text-xl mb-8">Your AI-powered gateway to the crypto universe</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Top Cryptocurrencies</h2>
          <ul>
            {topCryptos.map((crypto) => (
              <li key={crypto.symbol} className="flex justify-between items-center mb-2">
                <span>{crypto.name} ({crypto.symbol})</span>
                <span className={`font-bold ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${crypto.price.toLocaleString()} ({crypto.change}%)
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Trending Tokens</h2>
          <ul>
            {trendingTokens.map((token) => (
              <li key={token.symbol} className="flex justify-between items-center mb-2">
                <span>{token.name} ({token.symbol})</span>
                <span className={`font-bold ${token.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${token.price.toLocaleString()} ({token.change}%)
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest AI-Curated News</h2>
        <ul className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {latestNews.map((item, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400">Source: {item.source}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blockchain Performance Comparison</h2>
        <BlockchainPerformance />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2" /> Crypto Project Health Checker
          </h2>
          <p className="mb-4">Assess the overall health and potential of crypto projects using our AI-driven analysis.</p>
          <Link to="/health-checker" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Check Project Health
          </Link>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2" /> AI Sentiment Analysis
          </h2>
          <p className="mb-4">Gauge market sentiment for different cryptocurrencies using our advanced NLP algorithms.</p>
          <Link to="/sentiment-analysis" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Analyze Sentiment
          </Link>
        </div>
      </div>

      <div className="text-center">
        <Link to="/tokens" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-xl">
          Explore All Tokens
        </Link>
      </div>
    </div>
  )
}

export default Home