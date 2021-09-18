import React, { useState } from 'react';

const Grid = () => {
  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  const [winner, setWinner] = useState();

  const winnerCheck = (squares) => {
    let winningCombo = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in winningCombo) {
      winningCombo[combo].forEach((winpattern) => {
        if (
          squares[winpattern[0]] === '' ||
          squares[winpattern[1]] === '' ||
          squares[winpattern[2]] === ''
        ) {
        } else if (
          squares[winpattern[0]] === squares[winpattern[1]] &&
          squares[winpattern[1]] === squares[winpattern[2]]
        ) {
          setWinner(squares[winpattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== '') {
      alert('Choose another square');
      return;
    }
    let squares = [...cells];

    if (turn === 'X') {
      squares[num] = 'X';
      setTurn('O');
    } else {
      squares[num] = 'O';
      setTurn('X');
    }

    winnerCheck(squares);
    setCells(squares);
  };

  const restartGame = () => {
    setWinner(null);
    setCells(Array(9).fill(''));
  };

  function Square({ num }) {
    return (
      <>
        <div className="square_unit" onClick={() => handleClick(num)}>
          {cells[num]}
        </div>
      </>
    );
  }

  return (
    <>
      {!winner && <h1 className="game-title">Turn: Player {turn}</h1>}
      {winner && <h1 className="game-title">Game Over!</h1>}

      <div className="grid">
        <Square num={0} click={handleClick} />
        <Square num={1} click={handleClick} />
        <Square num={2} click={handleClick} />
        <Square num={3} click={handleClick} />
        <Square num={4} click={handleClick} />
        <Square num={5} click={handleClick} />
        <Square num={6} click={handleClick} />
        <Square num={7} click={handleClick} />
        <Square num={8} click={handleClick} />
      </div>

      {winner && (
        <>
          <h1 className="game-tag">Player {winner} has won! </h1>

          <button onClick={restartGame}>Start New Game</button>
        </>
      )}
    </>
  );
};

export default Grid;
