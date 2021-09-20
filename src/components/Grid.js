import React, { useState } from 'react';
import Square from '../components/Square';
import { Data } from './Data';

const Grid = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);

  const winningArr = Data(squares);
  const winner = winningArr.winner;
  const draw = winningArr.isDraw;

  const highlightwinner = winningArr.line;
  let status;

  const renderSquare = (i) => {
    return (
      <Square
        onClick={() => {
          const nextSquare = squares.slice();
          nextSquare[i] = isXNext ? 'X' : 'O';
          setXNext(!isXNext);
          setSquares(nextSquare);
        }}
        value={squares[i]}
        winningTiles={highlightwinner && highlightwinner.includes(i)}
      />
    );
  };

  const restartGame = () => {
    setSquares(Array(9).fill(''));
    window.location.reload();
  };

  return (
    <>
      <div>
        <h1 className="game-title">
          {winner
            ? (status = 'Game Over')
            : draw
            ? (status = 'It is a Draw')
            : (status = 'Next Player is ' + (isXNext ? 'X' : 'O'))}
        </h1>
      </div>

      <div className="grid">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      {winner && (
        <>
          <h1 className="game-tag">Player {winner} has won! </h1>

          <button className="restart" onClick={() => restartGame()}>
            Start New Game
          </button>
        </>
      )}

      {draw && (
        <>
          <h1 className="game-tag">Try Again! </h1>

          <button className="restart" onClick={() => restartGame()}>
            Start New Game
          </button>
        </>
      )}
    </>
  );
};

export default Grid;
