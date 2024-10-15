// import React from 'react'
import { Cpu, TrendingUp, Users } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About DisplayTokens</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/founder-image.jpg" 
            alt="Ahmad Younis - Founder of DisplayTokens" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Founder</h2>
          <h3 className="text-xl font-semibold mb-2">Ahmad Younis</h3>
          <p className="mb-4">
            Ahmad Younis, the visionary founder of DisplayTokens, has been at the forefront of the cryptocurrency revolution since 2009. With over a decade of experience in the crypto space, Ahmad has witnessed the industry's explosive growth and transformative potential firsthand.
          </p>
          <p className="mb-4">
            Driven by a passion for democratizing financial information and empowering investors, Ahmad founded DisplayTokens to bridge the gap between complex crypto data and actionable insights. His mission is to provide both newcomers and seasoned traders with the tools they need to navigate the dynamic world of digital assets confidently.
          </p>
          <p>
            Under Ahmad's leadership, DisplayTokens leverages cutting-edge AI technology to deliver real-time analysis, predictive trends, and comprehensive market insights. His vision is to create a platform that not only informs but also educates, enabling users to make well-informed decisions in the fast-paced crypto market.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Cpu className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p>Leveraging advanced artificial intelligence to provide accurate and timely market analysis.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
            <p>Offering up-to-the-minute information on cryptocurrency trends, prices, and market movements.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
            <p>Fostering a vibrant community of crypto enthusiasts, traders, and investors to share knowledge and insights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About