import React, { useState } from 'react'
import Square from '../components/Square'
import { Data } from './Data'

const Grid = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setXNext] = useState(true)
  const [score, setScore] = useState({ X: 0, O: 0, draws: 0 })

  const winningArr = Data(squares)
  const winner = winningArr.winner
  const draw = winningArr.isDraw
  const highlightwinner = winningArr.line
  const gameOver = winner || draw

  const renderSquare = (i) => {
    return (
      <Square
        onClick={() => {
          if (gameOver || squares[i]) return

          const nextSquare = squares.slice()
          nextSquare[i] = isXNext ? 'X' : 'O'
          setXNext(!isXNext)
          setSquares(nextSquare)
        }}
        value={squares[i]}
        winningTiles={highlightwinner && highlightwinner.includes(i)}
      />
    )
  }

  const restartGame = () => {
    // Update score when game ends
    if (winner) {
      setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }))
    } else if (draw) {
      setScore((prev) => ({ ...prev, draws: prev.draws + 1 }))
    }

    setSquares(Array(9).fill(null))
    setXNext(true)
  }

  const resetScore = () => {
    setScore({ X: 0, O: 0, draws: 0 })
  }

  const getStatus = () => {
    if (winner) return 'Game Over'
    if (draw) return 'It is a Draw'
    return `Next Player is ${isXNext ? 'X' : 'O'}`
  }

  return (
    <>
      {/* Score Display */}
      <div className='scoreboard'>
        <div className='score-item'>X: {score.X}</div>
        <div className='score-item'>O: {score.O}</div>
        <div className='score-item'>Draws: {score.draws}</div>
        <button className='reset-score' onClick={resetScore}>
          Reset Score
        </button>
      </div>

      <div>
        <h1 className='game-title'>{getStatus()}</h1>
      </div>

      <div className='grid'>
        {Array(9)
          .fill(null)
          .map((_, i) => renderSquare(i))}
      </div>

      {gameOver && (
        <>
          <h1 className='game-tag'>
            {winner ? `Player ${winner} has won!` : 'Try Again!'}
          </h1>
          <button className='restart' onClick={restartGame}>
            Start New Game
          </button>
        </>
      )}
    </>
  )
}

export default Grid
