import React, { useState } from 'react'
import { TrendingUp, TrendingDown, MessageCircle, Newspaper, Twitter } from 'lucide-react'

interface SentimentData {
  token: string
  overallSentiment: number
  socialMediaSentiment: number
  newsSentiment: number
  redditSentiment: number
}

const SentimentAnalysis: React.FC = () => {
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [sentimentData, setSentimentData] = useState<SentimentData | null>(null)

  const analyzeSentiment = () => {
    // In a real application, this would make an API call to your AI service
    // For this example, we'll generate random data
    const data: SentimentData = {
      token: tokenSymbol,
      overallSentiment: Math.random() * 100,
      socialMediaSentiment: Math.random() * 100,
      newsSentiment: Math.random() * 100,
      redditSentiment: Math.random() * 100,
    }
    setSentimentData(data)
  }

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-green-500'
    if (score >= 40) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getSentimentIcon = (score: number) => {
    if (score >= 70) return <TrendingUp className="w-6 h-6" />
    if (score >= 40) return <TrendingDown className="w-6 h-6 transform rotate-45" />
    return <TrendingDown className="w-6 h-6" />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Sentiment Analysis</h1>
      <p className="text-xl mb-8">
        Our advanced natural language processing analyzes social media, news articles, and forum discussions to gauge overall market sentiment for different cryptocurrencies.
      </p>

      <div className="mb-8">
        <input
          type="text"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          placeholder="Enter token symbol (e.g., BTC, ETH)"
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mb-4"
        />
        <button
          onClick={analyzeSentiment}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Analyze Sentiment
        </button>
      </div>

      {sentimentData && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{sentimentData.token} Sentiment Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className={`mr-4 ${getSentimentColor(sentimentData.overallSentiment)}`}>
                {getSentimentIcon(sentimentData.overallSentiment)}
              </div>
              <div>
                <h3 className="text-lg font-semibold">Overall Sentiment</h3>
                <p className={`text-2xl font-bold ${getSentimentColor(sentimentData.overallSentiment)}`}>
                  {sentimentData.overallSentiment.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Twitter className="w-6 h-6 mr-4 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Social Media Sentiment</h3>
                <p className={`text-2xl font-bold ${getSentimentColor(sentimentData.socialMediaSentiment)}`}>
                  {sentimentData.socialMediaSentiment.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Newspaper className="w-6 h-6 mr-4 text-yellow-500" />
              <div>
                <h3 className="text-lg font-semibold">News Sentiment</h3>
                <p className={`text-2xl font-bold ${getSentimentColor(sentimentData.newsSentiment)}`}>
                  {sentimentData.newsSentiment.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 mr-4 text-orange-500" />
              <div>
                <h3 className="text-lg font-semibold">Reddit Sentiment</h3>
                <p className={`text-2xl font-bold ${getSentimentColor(sentimentData.redditSentiment)}`}>
                  {sentimentData.redditSentiment.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">AI Sentiment Interpretation</h3>
            <p className="text-gray-300">
              Our AI analysis indicates that the overall sentiment for {sentimentData.token} is 
              {sentimentData.overallSentiment >= 70 ? ' highly positive' : sentimentData.overallSentiment >= 40 ? ' neutral' : ' negative'}. 
              Social media discussions show a {sentimentData.socialMediaSentiment >= 70 ? 'bullish' : sentimentData.socialMediaSentiment >= 40 ? 'mixed' : 'bearish'} trend, 
              while news coverage leans towards a {sentimentData.newsSentiment >= 70 ? 'positive' : sentimentData.newsSentiment >= 40 ? 'balanced' : 'cautious'} outlook. 
              Reddit communities express {sentimentData.redditSentiment >= 70 ? 'strong enthusiasm' : sentimentData.redditSentiment >= 40 ? 'moderate interest' : 'skepticism'} 
              about the token's prospects. 
              {sentimentData.overallSentiment >= 70 
                ? ' This positive sentiment could potentially drive increased interest and price appreciation.' 
                : sentimentData.overallSentiment >= 40 
                  ? ' The mixed sentiment suggests a period of consolidation or uncertainty in the near term.' 
                  : ' The negative sentiment might lead to selling pressure or decreased interest in the short term.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SentimentAnalysis