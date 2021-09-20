import React from 'react';

const Square = ({ onClick, value, winningTiles }) => {
  //   const className = 'square' + (winningTiles ? 'highlight' : '');
  const className = winningTiles ? 'square_highlight' : 'square_unit';
  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
