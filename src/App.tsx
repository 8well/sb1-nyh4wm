import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TokenExplorer from './pages/TokenExplorer'
import TokenDetail from './pages/TokenDetail'
import News from './pages/News'
import RisingCommunities from './pages/RisingCommunities'
import Contact from './pages/Contact'
import BlockchainPerformance from './pages/BlockchainPerformance'
import HealthChecker from './pages/HealthChecker'
import SentimentAnalysis from './pages/SentimentAnalysis'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <ErrorBoundary>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tokens" element={<TokenExplorer />} />
              <Route path="/tokens/:id" element={<TokenDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/communities" element={<RisingCommunities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blockchain-performance" element={<BlockchainPerformance />} />
              <Route path="/health-checker" element={<HealthChecker />} />
              <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
            </Routes>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  )
}

export default App