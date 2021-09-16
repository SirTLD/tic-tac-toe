import React from 'react';

const Circle = () => {
  return (
    <div className="circle">
      <svg
        className="x_circle"
        width="100"
        height="100"
        viewBox="-50 -50 100 100"
      >
        <circle cx="0" cy="0" r="40" />
      </svg>
    </div>
  );
};

export default Circle;
