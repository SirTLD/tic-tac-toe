import React from 'react';
import Circle from './Circle';
import Xsign from './Cross';

const Square = (props) => {
  return (
    <div className="square_unit" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
