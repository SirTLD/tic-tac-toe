import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

const Square = ({ position, value, makeTurn }) => {
  const handleClick = () => {
    if (value === 'EMPTY') {
      makeTurn(position);
    }
  };

  return (
    <div className="square_unit" onClick={handleClick}>
      {value === 'CIRCLE' && <Circle />}
      {value === 'CROSS' && <Cross />}
    </div>
  );
};

export default Square;
