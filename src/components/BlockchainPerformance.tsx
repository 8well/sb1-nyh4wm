import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
    <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#9CA3AF' }}
            axisLine={{ stroke: '#9CA3AF' }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#9CA3AF' }}
            axisLine={{ stroke: '#9CA3AF' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#82ca9d"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#9CA3AF' }}
            axisLine={{ stroke: '#9CA3AF' }}
          />
          <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#9CA3AF' }} />
          <Legend wrapperStyle={{ color: '#9CA3AF' }} />
          <Bar yAxisId="left" dataKey="tps" fill="#8884d8" name="TPS" />
          <Bar yAxisId="right" dataKey="latency" fill="#82ca9d" name="Latency (s)" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-300">Key Insights:</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>PulseChain leads in TPS with 100,000 transactions per second</li>
          <li>Solana offers the lowest latency at 0.4 seconds</li>
          <li>Base provides a balanced performance with 2000 TPS and moderate latency</li>
        </ul>
      </div>
    </div>
  )
}

export default BlockchainPerformance