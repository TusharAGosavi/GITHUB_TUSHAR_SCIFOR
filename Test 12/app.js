import React from 'react';
import { CounterProvider } from './Test12context';
import Counter from './Test12coounter';

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
