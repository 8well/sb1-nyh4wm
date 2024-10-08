import React from 'react'
import { Bitcoin } from 'lucide-react'

interface CursorEffectProps {
  position: { x: number; y: number }
}

const CursorEffect: React.FC<CursorEffectProps> = ({ position }) => {
  return (
    <div
      className="fixed pointer-events-none transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%) rotate(0deg)',
        animation: 'spin 4s linear infinite',
      }}
    >
      <Bitcoin className="w-6 h-6 text-yellow-500 opacity-70" />
    </div>
  )
}

export default CursorEffect