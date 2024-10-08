import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Zap, Clock, DollarSign } from 'lucide-react'

const BlockchainPerformance: React.FC = () => {
  const performanceData = [
    { name: 'Ethereum', tps: 15, latency: 15, cost: 5 },
    { name: 'Solana', tps: 65000, latency: 0.4, cost: 0.00025 },
    { name: 'Cardano', tps: 250, latency: 20, cost: 0.17 },
    { name: 'Polkadot', tps: 1000, latency: 6, cost: 0.1 },
    { name: 'Avalanche', tps: 4500, latency: 2, cost: 0.02 },
    { name: 'PulseChain', tps: 100000, latency: 0.3, cost: 0.0001 },
    { name: 'Base', tps: 2000, latency: 5, cost: 0.05 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blockchain Performance Comparison</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="tps" fill="#8884d8" name="TPS" />
            <Bar yAxisId="right" dataKey="latency" fill="#82ca9d" name="Latency (s)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2" /> Transactions Per Second (TPS)
          </h2>
          <ul>
            {performanceData.sort((a, b) => b.tps - a.tps).map((blockchain) => (
              <li key={blockchain.name} className="flex justify-between items-center mb-2">
                <span>{blockchain.name}</span>
                <span className="font-bold">{blockchain.tps.toLocaleString()} TPS</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" /> Latency
          </h2>
          <ul>
            {performanceData.sort((a, b) => a.latency - b.latency).map((blockchain) => (
              <li key={blockchain.name} className="flex justify-between items-center mb-2">
                <span>{blockchain.name}</span>
                <span className="font-bold">{blockchain.latency} s</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <DollarSign className="mr-2" /> Transaction Cost
          </h2>
          <ul>
            {performanceData.sort((a, b) => a.cost - b.cost).map((blockchain) => (
              <li key={blockchain.name} className="flex justify-between items-center mb-2">
                <span>{blockchain.name}</span>
                <span className="font-bold">${blockchain.cost.toFixed(5)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>PulseChain offers the highest TPS at 100,000, making it suitable for high-volume applications.</li>
          <li>Solana provides the lowest latency at 0.4 seconds, ideal for time-sensitive transactions.</li>
          <li>Base strikes a balance between performance and cost, with 2000 TPS and a moderate transaction fee.</li>
          <li>Ethereum, while having lower TPS, remains popular due to its established ecosystem and security.</li>
          <li>Emerging blockchains like Avalanche and Polkadot offer competitive performance metrics, challenging established networks.</li>
        </ul>
      </div>
    </div>
  )
}

export default BlockchainPerformance