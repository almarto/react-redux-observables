import React from "react";

const Counter = ({
  counter,
  incrementCounter,
  decrementCounter,
  incrementCounterAsync,
  decrementCounterAsync
}) => (
  <div className="counterContainer">
    <p>Counter Value is: {counter}</p>
    <button onClick={() => incrementCounter()}>+</button>
    <button onClick={() => decrementCounter()}>-</button>
    <p>Let's add a improved version with inc/dec debounced!</p>
    <button onClick={() => incrementCounterAsync()}>+</button>
    <button onClick={() => decrementCounterAsync()}>-</button>
  </div>
);

export default Counter;
