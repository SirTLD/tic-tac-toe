import React, { useState, useEffect } from 'react'

const Square = ({ onClick, value, winningTiles, isNewMove }) => {
  const [showAnimation, setShowAnimation] = useState(false)

  // Trigger animation when new move is made
  useEffect(() => {
    if (isNewMove && value) {
      setShowAnimation(true)
      const timer = setTimeout(() => setShowAnimation(false), 600)
      return () => clearTimeout(timer)
    }
  }, [isNewMove, value])

  // Determine class names
  const getClassName = () => {
    let className = winningTiles ? 'square_highlight' : 'square_unit'

    // Add player-specific classes for different colors
    if (value === 'X') {
      className += ' player-x'
    } else if (value === 'O') {
      className += ' player-o'
    }

    // Add animation class
    if (showAnimation) {
      className += ' new-move'
    }

    return className
  }

  return (
    <div
      className={getClassName()}
      onClick={onClick}
      style={{
        // Add slight rotation for visual interest
        transform: value ? `rotate(${Math.random() * 6 - 3}deg)` : 'none'
      }}
    >
      {value}
    </div>
  )
}

export default Square
