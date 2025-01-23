
import React, { useState, useEffect } from 'react';
import './WaveGrid.css';

const WaveGrid = () => {
  const [grid, setGrid] = useState(Array(15 * 20).fill(0));
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const interval = setInterval(updateGrid, 500);
    return () => clearInterval(interval);
  }, []);

  const updateGrid = () => {
    const newGrid = grid.map((_, i) => {
      const row = Math.floor(i / 20);
      const col = i % 20;
      const wave = Math.sin((row + col * 0.5) * Math.PI / 10) * 0.5 + 0.5;
      return wave;
    });
    setGrid(newGrid);
    setColors(newGrid.map(v => `rgb(255, ${Math.floor(v * 255)}, ${Math.floor(v * 255)})`));
  };

  return (
    <div className="wave-grid">
      {grid.map((_, i) => (
        <div key={i} className="square" style={{ backgroundColor: colors[i] }} />
      ))}
    </div>
  );
};

export default WaveGrid;