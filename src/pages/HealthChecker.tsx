import React, { useState } from 'react'
import { Activity, Users, Code, DollarSign } from 'lucide-react'

interface ProjectHealth {
  name: string
  developerActivity: number
  communityEngagement: number
  tokenomics: number
  overallHealth: number
}

const HealthChecker: React.FC = () => {
  const [projectName, setProjectName] = useState('')
  const [projectHealth, setProjectHealth] = useState<ProjectHealth | null>(null)

  const checkProjectHealth = () => {
    // In a real application, this would make an API call to your AI service
    // For this example, we'll generate random data
    const health: ProjectHealth = {
      name: projectName,
      developerActivity: Math.random() * 100,
      communityEngagement: Math.random() * 100,
      tokenomics: Math.random() * 100,
      overallHealth: Math.random() * 100,
    }
    setProjectHealth(health)
  }

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Project Health Checker</h1>
      <p className="text-xl mb-8">
        Our AI-driven tool assesses the overall health and potential of crypto projects based on factors like developer activity, community engagement, and tokenomics.
      </p>

      <div className="mb-8">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name or token symbol"
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mb-4"
        />
        <button
          onClick={checkProjectHealth}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Check Project Health
        </button>
      </div>

      {projectHealth && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{projectHealth.name} Health Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Code className="w-8 h-8 mr-4 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Developer Activity</h3>
                <p className={`text-2xl font-bold ${getHealthColor(projectHealth.developerActivity)}`}>
                  {projectHealth.developerActivity.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-8 h-8 mr-4 text-purple-500" />
              <div>
                <h3 className="text-lg font-semibold">Community Engagement</h3>
                <p className={`text-2xl font-bold ${getHealthColor(projectHealth.communityEngagement)}`}>
                  {projectHealth.communityEngagement.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 mr-4 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Tokenomics</h3>
                <p className={`text-2xl font-bold ${getHealthColor(projectHealth.tokenomics)}`}>
                  {projectHealth.tokenomics.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Activity className="w-8 h-8 mr-4 text-red-500" />
              <div>
                <h3 className="text-lg font-semibold">Overall Health</h3>
                <p className={`text-2xl font-bold ${getHealthColor(projectHealth.overallHealth)}`}>
                  {projectHealth.overallHealth.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-300">
              Based on our AI analysis, {projectHealth.name} shows 
              {projectHealth.overallHealth >= 80 ? ' strong ' : projectHealth.overallHealth >= 60 ? ' moderate ' : ' concerning '}
              overall health. The project demonstrates 
              {projectHealth.developerActivity >= 80 ? ' high ' : projectHealth.developerActivity >= 60 ? ' moderate ' : ' low '}
              developer activity, 
              {projectHealth.communityEngagement >= 80 ? ' strong ' : projectHealth.communityEngagement >= 60 ? ' moderate ' : ' weak '}
              community engagement, and 
              {projectHealth.tokenomics >= 80 ? ' well-designed ' : projectHealth.tokenomics >= 60 ? ' adequate ' : ' problematic '}
              tokenomics. 
              {projectHealth.overallHealth >= 80 
                ? 'This project shows promising potential for long-term success.' 
                : projectHealth.overallHealth >= 60 
                  ? 'While there are some strengths, there are also areas that need improvement for long-term viability.' 
                  : 'Significant improvements are needed across multiple areas for this project to become more viable.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HealthChecker