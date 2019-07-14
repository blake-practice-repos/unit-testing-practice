import React from 'react';

// import Money from './Money';
// import MoneyRange from './MoneyRange';

const App = () => (
  <div>
    <p>
      The price of your ticket is <Money amount={2000} currency="GBP" />
    </p>
    <p>
      The price of your ticket is <MoneyRange min={2000} max={4000} currency="GBP" />
    </p>
  </div>
);
export default App;