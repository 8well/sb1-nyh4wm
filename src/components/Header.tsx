import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 interactive">
          <img 
            src="/logo.svg" 
            alt="DisplayTokens Logo" 
            className="w-10 h-10"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://via.placeholder.com/40';
            }}
          />
          <span className="text-2xl font-bold">DisplayTokens</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-400 interactive">Home</Link></li>
            <li><Link to="/tokens" className="hover:text-blue-400 interactive">Tokens</Link></li>
            <li><Link to="/news" className="hover:text-blue-400 interactive">News</Link></li>
            <li><Link to="/communities" className="hover:text-blue-400 interactive">Communities</Link></li>
            <li><Link to="/health-checker" className="hover:text-blue-400 interactive">Health Checker</Link></li>
            <li><Link to="/sentiment-analysis" className="hover:text-blue-400 interactive">Sentiment Analysis</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 interactive">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 interactive">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tokens..."
              className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 interactive"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header