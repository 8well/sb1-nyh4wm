import React, { useState, useEffect } from 'react'
import { TrendingUp, Twitter, MessageCircle, Youtube, Users, BarChart2 } from 'lucide-react'

interface Community {
  id: string
  name: string
  description: string
  twitterFollowers: number
  discordMembers: number
  youtubeSubscribers: number
  sentiment: number
  trendingScore: number
}

const RisingCommunities: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    // Fetch community data from an API here
    // For now, we'll use placeholder data
    const placeholderCommunities: Community[] = [
      {
        id: 'community1',
        name: 'DeFi Innovators',
        description: 'A community focused on innovative DeFi projects',
        twitterFollowers: 50000,
        discordMembers: 25000,
        youtubeSubscribers: 100000,
        sentiment: 0.8,
        trendingScore: 95,
      },
      {
        id: 'community2',
        name: 'NFT Creators',
        description: 'Artists and collectors discussing the latest in NFTs',
        twitterFollowers: 75000,
        discordMembers: 40000,
        youtubeSubscribers: 200000,
        sentiment: 0.7,
        trendingScore: 88,
      },
      {
        id: 'community3',
        name: 'Blockchain Gamers',
        description: 'Enthusiasts of blockchain-based gaming',
        twitterFollowers: 100000,
        discordMembers: 60000,
        youtubeSubscribers: 300000,
        sentiment: 0.9,
        trendingScore: 97,
      },
    ]
    setCommunities(placeholderCommunities)
  }, [])

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 0.7) return 'text-green-500'
    if (sentiment >= 0.4) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Rising Communities</h1>
      <p className="text-xl mb-8">
        Discover the most vibrant and fastest-growing crypto communities, analyzed by our AI for trends, sentiment, and engagement across various platforms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((community) => (
          <div key={community.id} className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{community.name}</h2>
            <p className="text-gray-400 mb-4">{community.description}</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Twitter className="w-5 h-5 mr-2 text-blue-400" />
                  Twitter Followers
                </span>
                <span>{community.twitterFollowers.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-indigo-400" />
                  Discord Members
                </span>
                <span>{community.discordMembers.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Youtube className="w-5 h-5 mr-2 text-red-400" />
                  YouTube Subscribers
                </span>
                <span>{community.youtubeSubscribers.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  AI Sentiment Analysis
                </span>
                <span className={getSentimentColor(community.sentiment)}>
                  {(community.sentiment * 100).toFixed(1)}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                  Trending Score
                </span>
                <span className="text-purple-400">{community.trendingScore}/100</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-400">
                Our AI analysis suggests that this community is {community.trendingScore > 90 ? 'rapidly growing' : 'steadily increasing'} in popularity. 
                The sentiment is {community.sentiment > 0.7 ? 'very positive' : community.sentiment > 0.5 ? 'generally positive' : 'mixed'}, 
                indicating a {community.sentiment > 0.6 ? 'strong' : 'potential'} opportunity for engagement and growth.
              </p>
            </div>

            <div className="mt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Explore Community
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Community Trend Analysis</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Overall Crypto Community Growth</h3>
            <BarChart2 className="w-6 h-6 text-blue-400" />
          </div>
          {/* Placeholder for a chart or graph */}
          <div className="bg-gray-700 h-64 rounded-md flex items-center justify-center">
            Community Growth Trend Chart Placeholder
          </div>
          <p className="mt-4 text-gray-400">
            Our AI-powered analysis shows a significant uptick in crypto community engagement across all platforms over the past month. 
            Twitter activity has increased by 25%, Discord participation is up 30%, and YouTube viewership for crypto content has grown by 40%.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RisingCommunities