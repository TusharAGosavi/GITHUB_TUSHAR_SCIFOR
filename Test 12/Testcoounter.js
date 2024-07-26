
import React, { useContext } from 'react';
import { CounterContext } from './Test12context';
import './index.css';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="counter">
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
