import React from 'react'
import { Twitter, Facebook, Instagram, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="DisplayTokens Logo" 
                className="w-8 h-8"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://via.placeholder.com/32';
                }}
              />
              <h3 className="text-xl font-bold">DisplayTokens</h3>
            </div>
            <p className="text-sm">Your AI-powered gateway to the crypto universe</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/tokens" className="hover:text-blue-400">Tokens</a></li>
              <li><a href="/news" className="hover:text-blue-400">News</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400"><Twitter /></a>
              <a href="#" className="text-white hover:text-blue-400"><Facebook /></a>
              <a href="#" className="text-white hover:text-blue-400"><Instagram /></a>
              <a href="#" className="text-white hover:text-blue-400"><Globe /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest news and offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 DisplayTokens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer