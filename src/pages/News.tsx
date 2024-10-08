import React, { useState, useEffect } from 'react'
import { Clock, Tag } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  summary: string
  source: string
  url: string
  publishedAt: string
  category: string
  sentiment: 'positive' | 'neutral' | 'negative'
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    // Fetch news data from an API here
    // For now, we'll use placeholder data
    const placeholderNews: NewsItem[] = [
      {
        id: '1',
        title: 'Bitcoin Reaches New All-Time High',
        summary: 'Bitcoin surpasses $60,000 for the first time, setting a new record.',
        source: 'CryptoNews',
        url: 'https://example.com/news/1',
        publishedAt: '2024-03-15T10:30:00Z',
        category: 'market',
        sentiment: 'positive',
      },
      {
        id: '2',
        title: 'Ethereum 2.0 Upgrade Scheduled for Next Month',
        summary: 'The long-awaited Ethereum 2.0 upgrade is set to launch next month, promising improved scalability and energy efficiency.',
        source: 'BlockchainInsider',
        url: 'https://example.com/news/2',
        publishedAt: '2024-03-14T15:45:00Z',
        category: 'technology',
        sentiment: 'positive',
      },
      {
        id: '3',
        title: 'Regulatory Concerns Grow for DeFi Projects',
        summary: 'Regulators express increasing concern over the rapid growth of decentralized finance (DeFi) projects and their potential risks.',
        source: 'CoinDesk',
        url: 'https://example.com/news/3',
        publishedAt: '2024-03-13T09:15:00Z',
        category: 'regulation',
        sentiment: 'negative',
      },
    ]
    setNews(placeholderNews)
  }, [])

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Crypto News</h1>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex space-x-4">
          {['all', 'market', 'technology', 'regulation'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(item => (
          <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.summary}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(item.publishedAt).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {item.category}
                </span>
              </div>
            </div>
            <div className="bg-gray-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">{item.source}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News