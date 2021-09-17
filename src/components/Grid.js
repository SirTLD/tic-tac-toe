import React, { useState } from 'react';
import Square from './Square';

const Grid = () => {
  const EMPTY = 'EMPTY';
  const CIRCLE = 'CIRCLE';
  const CROSS = 'CROSS';

  const [state, setState] = useState({
    player: CROSS,
    positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  });

  const makeTurn = (position) => {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
    });
  };

  return (
    <div className="grid_container">
      <div className="grid">
        <Square position={0} value={state.positions[0]} makeTurn={makeTurn} />
        <Square position={1} value={state.positions[1]} makeTurn={makeTurn} />
        <Square position={2} value={state.positions[2]} makeTurn={makeTurn} />
        <Square position={3} value={state.positions[3]} makeTurn={makeTurn} />
        <Square position={4} value={state.positions[4]} makeTurn={makeTurn} />
        <Square position={5} value={state.positions[5]} makeTurn={makeTurn} />
        <Square position={6} value={state.positions[6]} makeTurn={makeTurn} />
        <Square position={7} value={state.positions[7]} makeTurn={makeTurn} />
        <Square position={8} value={state.positions[8]} makeTurn={makeTurn} />
      </div>
    </div>
  );
};

export default Grid;
