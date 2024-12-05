import React from 'react';

function CircularProgressBarComponent({ percentage }) {
  return (
    <div
      className="radial-progress text-blue-500 bg-blue-200"
      style={{
        "--value": percentage, 
        "--size": "10rem", 
        "--thickness": "20px", 
      }}
      role="progressbar"
    >
      {percentage}%
    </div>
  );
}

export default CircularProgressBarComponent;
