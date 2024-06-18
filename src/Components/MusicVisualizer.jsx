import React, { useEffect, useState } from 'react';

const MusicVisualizer = () => {
  const [bars, setBars] = useState([1, 1, 1, 1, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(bars.map(() => Math.random() * 0.5 + 0.5));
    }, 300);
    return () => clearInterval(interval);
  }, [bars]);

  return (
    <svg width="20" height="20" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
      {bars.map((scale, index) => (
        <rect
          key={index}
          className="bar"
          x={10 + 30 * index}
          y={10}
          width="15"
          height={80}
          style={{ transform: `scaleY(${scale})`, transformOrigin: 'bottom' }}
        />
      ))}
    </svg>
  );
};

export default MusicVisualizer;
