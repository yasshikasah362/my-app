import React, { useState } from 'react';
import Navbar from './Navbar';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Change background color based on count
  const backgroundColor = `rgb(${count * 10}, ${255 - count * 10}, ${200 - count * 5})`;

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        height: '100vh',
        backgroundColor: backgroundColor,
        transition: 'background-color 0.5s ease',
      }}
    >
      <Navbar />
      <h1 className="mb-4">Counter: {count}</h1>
      <div className="mb-4">
        <button 
          className="btn btn-success mx-2" 
          onClick={increment}
        >
          Increment
        </button>
        <button 
          className="btn btn-danger mx-2" 
          onClick={decrement}
        >
          Decrement
        </button>
        <button 
          className="btn btn-warning mx-2" 
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
